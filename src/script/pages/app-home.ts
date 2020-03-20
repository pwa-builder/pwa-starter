import { LitElement, css, html, customElement } from 'lit-element';

import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  static get styles() {
    return css`
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
        <h2>Home Page</h2>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }
}