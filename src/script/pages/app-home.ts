import { LitElement, css, html, customElement } from 'lit-element';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  static get styles() {
    return css`
      #welcomeBlock {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      #welcomeBlock h2 {
        margin-bottom: 0;
      }

      #welcomeBlock p {
        max-width: 22em;
      }

      #welcomeBlock img {
        width: 6em;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      @media(spanning: single-fold-vertical) {
        #welcomeBlock {
          width: 50%;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>

        <div id="welcomeBlock">

          <img src="assets/icons/icon_512.png" alt="app icon">
          <h2>Welcome!</h2>

          <p>
            Welcome to the lit-element edition of the <a href="https://pwabuilder.com">PWABuilder</a> pwa-starter!

            Be sure to head back to <a href="https://pwabuilder.com">PWABuilder</a> when you are ready to ship this PWA to the Microsoft, Google Play and Samsung Galaxy stores! PWABuilder allows you to easily
            generate packages for these stores. 
          </p>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }
}