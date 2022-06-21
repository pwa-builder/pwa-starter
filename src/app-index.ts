import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { registerSW } from 'virtual:pwa-register';

import './script/pages/app-home';
import './script/components/header';
import './styles/global.css';


@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }
      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/

    // For more info on using the @vaadin/router check here https://vaadin.com/router
    const router = new Router(this.shadowRoot?.querySelector('#routerOutlet'));
    router.setRoutes([
      // temporarily cast to any because of a Type bug with the router
      {
        path: '',
        animate: true,
        children: [
          { path: '/', component: 'app-home' },
          {
            path: '/about',
            component: 'app-about',
            action: async () => {
              await import('./script/pages/app-about.js');
            },
          },
          {
            path: '/education',
            component: 'app-education',
            action: async () => {
              await import('./script/pages/app-education.js');
            },
          },
          {
            path: '/experience',
            component: 'app-experience',
            action: async () => {
              await import('./script/components/app-experience.js');
            },
          },
          {
            path: '/resume',
            component: 'app-resume',
            action: async () => {
              await import('./script/pages/app-resume.js');
            },
          },
          {
            path: '/projects',
            component: 'app-projects',
            action: async () => {
              await import('./script/pages/app-projects.js');
            },
          },
          {
            path: '/art',
            component: 'app-art',
            action: async () => {
              await import('./script/pages/app-art.js');
            },
          },
          {
            path: '/extra',
            component: 'app-extra',
            action: async () => {
              await import('./script/pages/app-extra.js');
            },
          },
        ],
      } as any,
    ]);
    registerSW({ immediate: true });
  }

  render() {
    return html`



      <div>

        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
  }
}
