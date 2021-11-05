import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static get styles() {
    return css``;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header enableBack="${true}"></app-header>

      <div>
        <h2>About Page</h2>
      </div>
    `;
  }
}
