import { LitElement, css, html, customElement } from 'lit-element';


@customElement('app-header')
export class AppHeader extends LitElement {

  static get styles() {
    return css`
      header h1 {
        margin-top: 0;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <h1>PWA Starter</h1>

        <nav>
          <a href="./">Home</a>
          <a href="./about">About</a>
        </nav>
      </header>
    `;
  }
}