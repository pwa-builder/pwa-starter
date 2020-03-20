var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html, customElement } from 'lit-element';
import './app-home';
import { Router } from '@vaadin/router';
import '../components/header';
let AppIndex = class AppIndex extends LitElement {
    static get styles() {
        return css `
    `;
    }
    constructor() {
        super();
    }
    firstUpdated() {
        var _a;
        const router = new Router((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#routerOutlet'), { baseUrl: '/build/' });
        router.setRoutes([
            { path: '/', component: 'app-home' },
            {
                path: "/about",
                component: "app-about",
                action: async () => {
                    await import('./app-about.js');
                },
            }
        ]);
    }
    render() {
        return html `
      <div>
        <app-header></app-header>

        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `;
    }
};
AppIndex = __decorate([
    customElement('app-index')
], AppIndex);
export { AppIndex };
