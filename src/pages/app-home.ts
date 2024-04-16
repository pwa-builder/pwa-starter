import { LitElement, css, html } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { fluentButton, fluentTextArea, provideFluentDesignSystem } from '@fluentui/web-components';

provideFluentDesignSystem().register(fluentButton(), fluentTextArea());

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  @state() transcribedText: string = '';
  @state() transcribing: boolean = false;
  @state() currentFileData: any = null;

  @state() copied: boolean = false;

  static styles = [
    styles,
    css`
      main {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      fluent-text-area {
        width: 100%;
        height: 100%;
      }

      fluent-text-area::part(control) {
        height: 50vh;
        border: none;
        border-radius: 8px;
        overflow-y: hidden;
      }

      #actions-menu {
        display: flex;
        gap: 8px;
        flex-direction: row;
        justify-content: space-between;
      }

      #main-action-block {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      #file-data-block {
        display: flex;
        gap: 4px;
      }

      #file-size {
        color: grey;
        font-size: 10px;
      }

      #file-name {
        color: grey;
        font-size: 12px;
        font-weight: bold;

        max-width: 169px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
      }

      #file-data-block {
        display: flex;
        flex-direction: column;
      }

      @media(prefers-color-scheme: dark) {
        fluent-text-area::part(control) {
            background: #ffffff0f;
            color: white;
        }

        fluent-button.neutral::part(control) {
          background: #ffffff14;
          color: white;
        }
      }

      @media(max-width: 640px) {
        main {
          display: flex;
          flex-direction: column-reverse;
          gap: 10px;
        }
      }
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');

    const { loadTranscriber } = await import('../services/whisper');
    await loadTranscriber('tiny');

    // when we start transcribing we will get interim results
    // and display those to the user
    window.addEventListener("interim-transcription", (e: any) => {
      this.transcribedText = e.detail.message;
    });
  }

  async transcribeFile() {
    // reset our state
    this.copied = false;
    this.transcribedText = "";

    const pickerOpts = {
      types: [
        {
          description: "Video",
          accept: {
            "video/*": [".wav"],
            "audio/*": [".wav"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    };
    // Open file picker and destructure the result the first handle
    // @ts-ignore
    const [fileHandle] = await window.showOpenFilePicker(pickerOpts);

    // get file contents
    const fileData = await fileHandle.getFile();

    const { bytesToSize } = await import('../services/utils');
    this.currentFileData = {
      name: fileData.name,
      size: bytesToSize(fileData.size) || "0kb",
    };

    await this.handleTranscribing(fileData);
  }

  private async handleTranscribing(fileData: any) {
    this.transcribing = true;
    this.transcribedText = "Loading Model...";

    const { doLocalWhisper } = await import('../services/whisper');
    const transcript = await doLocalWhisper(fileData, "tiny");

    this.transcribedText = transcript.transcription;
    this.transcribing = false;
  }

  private async copyTranscript() {
    await navigator.clipboard.writeText(this.transcribedText);

    this.copied = true;
  }

  private async shareTranscript() {
    await navigator.share({
      title: "Transcript",
      text: this.transcribedText,
    });
  }

  private async downloadTranscript() {
    // @ts-ignore
    const [fileHandle] = await window.showSaveFilePicker({
      types: [
        {
          description: "Text",
          accept: {
            "text/plain": [".txt"],
          },
        },
      ],
    });

    const writable = await fileHandle.createWritable();
    await writable.write(this.transcribedText);
    await writable.close();
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="actions-menu">
          <div id="main-action-block">
            <fluent-button @click="${this.transcribeFile}" appearance="accent" ?disabled="${this.transcribing}" id="main-action">Upload a File</fluent-button>

            ${
              this.currentFileData ? html`
                <div id="file-data-block">
                  <span id="file-name">${this.currentFileData.name}</span>
                  <span id="file-size">${this.currentFileData.size}</span>
                </div>
              ` : null
            }
          </div>

          <div>
            ${
              this.copied ? html`
                <fluent-button ?disabled="${true}">Copied</fluent-button>
              ` : html`
                <fluent-button ?disabled="${this.transcribing || this.transcribedText.length === 0}" @click="${this.copyTranscript}">Copy</fluent-button>
              `
            }
            <fluent-button ?disabled="${this.transcribing || this.transcribedText.length === 0}" @click="${this.shareTranscript}">Share</fluent-button>
            <fluent-button ?disabled="${this.transcribing || this.transcribedText.length === 0}" @click="${this.downloadTranscript}">Download</fluent-button>
          </div>
        </div>
        <fluent-text-area placeholder="Transcription will start when you upload a file" readonly .value="${this.transcribedText || ""}"></fluent-text-area>
      </main>
    `;
  }
}
