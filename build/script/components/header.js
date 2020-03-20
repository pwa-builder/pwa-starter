var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html, customElement } from 'lit-element';
let AppHeader = class AppHeader extends LitElement {
    static get styles() {
        return css `
      header h1 {
        margin-top: 0;
      }
    `;
    }
    constructor() {
        super();
    }
    render() {
        return html `
      <header>
        <h1>PWA Starter</h1>

        <nav>
          <a href="./">Home</a>
          <a href="./about">About</a>
        </nav>
      </header>
    `;
    }
};
AppHeader = __decorate([
    customElement('app-header')
], AppHeader);
export { AppHeader };
