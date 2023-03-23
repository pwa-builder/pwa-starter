import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return [
      styles,
      css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `];
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'Cryptonit pwa-app',
        text: 'Check out the Cryptonit app!',
        url: 'https://github.com/Cryptonit63/pwa-starter.git',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
            The authorization on the resource will be via blockchain. there are no logins and passwords, there are only keys that will open sets of doors, check out the
              <a href="https://github.com/Cryptonit63/pwa-starter.git">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://github.com/Cryptonit63/">Cryptonit profile</a>
              Cryptonit app! Be sure to head back to
              <a href="https://t.me/cryptonit63">Cryptonit app</a>
              Cryptonit app a large-scale decentralized platform integrating a multitude of tools, resources and community driven An experimental information resource capable of creating a decentralized bridge controlled by the community to provide users with reliable and timely information of crypto space and provide possible assistance to investigations of loss of funds.

          About our mission:
          
          Launched the development of a proprietary web3.0 platform and governance token will allow you to keep up with the news and make it not only make finding important information more accessibility, but also will allow:
          
          keep up with security news in crypto
          will allow you to post an ad
          find a job or post your own job
          compare high and low risc projects
          hardware sale/purchase/service
          ratings of service centers and crypto communities based on votes
          comparison of returns on equipment/pools
          related products and services marketplace
            </p>

            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter!</sl-button>`
              : null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${(import.meta as any).env.BASE_URL}about" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `;
  }
}
