import { LitElement, css, html, customElement } from 'lit-element';

import './app-home';

import { Router } from '@vaadin/router';

import '../components/header';


@customElement('app-index')
export class AppIndex extends LitElement {

  static get styles() {
    return css`
      main {
        padding: 16px;
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit-element
    // for more info check out the lit-element docs https://lit-element.polymer-project.org/guide/lifecycle
    
    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      { path: '/', component: 'app-home' },
      {
        path: "/about",
        component: "app-about",
        action: async() => {
          await import('./app-about.js');
        },
      }
    ]);
  }

  render() {
    return html`
      <div>
        <app-header></app-header>

        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
  }
}