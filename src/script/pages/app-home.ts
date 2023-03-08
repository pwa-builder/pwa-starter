import { LitElement, css, html } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';
import { about_panels, skills } from '../utils/data'

import '../components/about-panel'

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  // flyout stuff
  @state() flyout_category: string = "";
  @state() flyout_description: string = "";
  @state() flyout_imgs: any = {};

  // for skills
  @state() paused: boolean = false;


  static get styles() {
    return css`
      :host {
        padding: 1em;
        --carousel-width: 900px;
        --slide-width: 150px;
        --slide-height: 150px;
        --carousel-image-width: 50px;
      }
      #wrapper {
        display: flex;
        flex-direction: column;
        gap: 1em;
      }
      #header-block {
        display: flex;
        gap: 1em;
      }

      #header-block > * {
        width: 50%;
      }

      #header-text {
      }

      #header-slides {
        border: 1px solid black;
      }

      #about-block {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 1em;
      }

      #flyout-block {
        display: flex;
        gap: 1em;
        align-items: flex-start;
        justify-content: space-between;
      }

      #flyout-text h2 {
        margin-top: 0;
      }

      #flyout-images {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: .5em;
      }

      #flyout-images img {
        height: 100px;
        width: 100px;
      }

      #flyout-images button:hover {
        cursor: pointer;
      }

      #skills-block {
        display: flex;
        flex-direction: column;
        gap: .75em;
        align-items: center;
      }

      .skills-holder {
        width: var(--slide-width);
      }

      .skills-desc {
        text-align: center;
      }

      .skill-icon {
        color: white;
        height: var(--carousel-image-width);
        width: var(--carousel-image-width);
        font-size: 16px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(var(--slide-width) * -8)); }
      }
      .slider {
        overflow: hidden;
        position: relative;
        width: var(--carousel-width);
        padding: .5em 0;
      }
      .slider::before,
      .slider::after {
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
      }

      .slider::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
      }
      .slider::before {
        left: 0;
        top: 0;
      }
      .slide-track {
        animation: scroll 16s infinite linear;
        display: flex;
        width: calc(var(--slide-width) * 16);
      }

      .slide {
        height: fit-content;
        width: var(--slide-width);
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.5em;
      }

      .controls {
        all: unset;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .controls:hover{
        cursor: pointer;
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {

  }

  handlePanelClick(panel: any){
    this.flyout_category = panel.category;
    this.flyout_description = panel.description;
    this.flyout_imgs = panel.images;
    this.requestUpdate();
  }

  resetFlyout(){
    this.flyout_category = "";
    this.flyout_description = "";
    this.flyout_imgs = "";
  }

  toggleAnimation(){
    this.paused = !this.paused;
    let animatedElement = (this.shadowRoot!.querySelector(".slide-track") as HTMLElement);
    if(this.paused){
      animatedElement!.style.animationPlayState = 'paused';
    } else {
      animatedElement!.style.animationPlayState = 'running';
    }
  }

  render() {
    return html`
      <div id="wrapper">
        <div id="header-block">
          <div id="header-text">
            <h1>Hi! I'm Ezra Belgrave</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="header-slides"></div>
        </div>

        ${this.flyout_category.length > 0 ?
          html`
            <div id="flyout-block">
              <sl-animation name="bounceInLeft" easing="linear" duration="1000" iterations="1" play>
                <div id="flyout-text">
                    <h2>${this.flyout_category}</h2>
                    <p>${this.flyout_description}</p>
                </div>
              </sl-animation>
              <sl-animation name="bounceInRight" easing="linear" duration="1000" iterations="1" play>
                <div id="flyout-images">
                  ${this.flyout_imgs.map((img: any) =>
                    html`<img src="${img.src}" alt=${img.alt} />`)}
                  <button type="button" @click=${() => this.resetFlyout()}>Done here?</button>
                </div>
              </sl-animation>
            </div>
          ` :
          html``}

        <div id="about-block">
          ${about_panels.map((panel: any) =>
            html`<about-panel .category=${panel.category} .description=${panel.description} .img=${panel.images[0]} @click=${() => this.handlePanelClick(panel)}></about-panel>`)}
        </div>

        <div id="skills-block">
          <h2>Skills</h2>
          <div class="slider">
            <div class="slide-track">
              ${skills.map((skill: any) =>
                html`
                    <div class="skills-holder slide">
                      <div class="skill-icon" style=${skill.color}>icon</div>
                      <div class="skill-desc">${skill.skill}</div>
                    </div>
                `)}

                ${skills.map((skill: any) =>
                html`
                    <div class="skills-holder slide">
                      <div class="skill-icon" style=${skill.color}>icon</div>
                      <div class="skill-desc">${skill.skill}</div>
                    </div>
                `)}
            </div>
          </div>
          ${this.paused ? html`<button class="controls" type="button" @click=${() => this.toggleAnimation()}>▶</button>` : html`<button class="controls" type="button" @click=${() => this.toggleAnimation()}>||</ion-icon></button>`}
        </div>


      </div>
    `;
  }
}
