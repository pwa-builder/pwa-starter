import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('about-panel')
export class AboutPanel extends LitElement {

    @property({type: String}) category: string = "";
    @property({type: String}) description: string = "";
    @property({type: Object}) img: any = {};

  static get styles() {
    return css`

        #panel-wrapper {
            display: flex;
            gap: 1em;
            align-items: center;
        }

        #panel-wrapper:hover {
            cursor: pointer;
        }

        #panel-image {
            display: flex;
            gap: 1em;
            align-items: center;
        }

        #panel-text p {
            font-weight: normal;
        }

        #panel-image img{
            height: 100px;
            width: 100px;
        }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <div id="panel-wrapper">
            <div id="panel-text">
                <h2>${this.category}</h2>
                <p>${this.description}</p>
            </div>
            <div id="panel-image">
                <img src="${this.img.src}" alt=${this.img.alt} />
            </div>
        </div>
    `;
  }
}
