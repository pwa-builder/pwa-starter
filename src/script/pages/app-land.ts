import { Router } from '@vaadin/router';
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/app-experience';
import { categories } from '../utils/data'
import 'fa-icons';

@customElement('app-land')
export class AppLand extends LitElement {

  static get styles() {
    return css`

    #wrapper {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
        section {
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 1em;
            box-shadow: 0px 4px 10px 2px #0000004a;
            border-radius: 10px;
        }

        .blue_card {
            height: fit-content;

        }
        .blue_tile {
            height: 480px;
            box-shadow: 0px 4px 10px 2px black;
            background-color: saddlebrown;

        }

        .colored_text{
            color: #ff4546;
            font-family: Mincho-Bold;
            font-weight: bold;

        }

        .continue {
            all: unset;
            align-self: center;
            justify-self: center;
        }

        .continue:hover {
            cursor: pointer;
        }

        .flex-center {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #intro {
            font-size: 50px;
        }

        #about h2 {
            align-items: flex-start;
            writing-mode: vertical-rl;
            transform: scale(-1, -1);
        }

        #about h2 {
            margin: 0px;
            padding: 1em;
            font-size: 40px;
            padding-right: 0;
        }

        #about{
            display: flex;
            flex-direction: row;
        }



    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {

  }


  scrollForMe(e: any, loc: string){
    e.preventDefault();

    this.shadowRoot!.querySelector("#"+loc)!.scrollIntoView({
        behavior: 'smooth'
    });
  }

  render() {
    return html`

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

      <div id="wrapper">
        <section id="welcome">

                <div class="container">
                    <div class="row">
                        <div class="col flex-center">

                            <img src="assets/images/headshot.png" alt="Headshot of Belgrave smiling" width="300" class="img-fluid">
                        </div>
                        <div class="col" id="intro">
                            Hello! I am a 3rd year student at Duke University majoring in Computer Science with minors in Visual Media Studies and Education.
                            <i class="fas fa-person-chalkboard" color="#000000" size="2em"></i>

                        </div>
                    </div>



                </div>
        </section>
        <section id="about">
            <div>
                <h2>
                    About Me
                </h2>
            </div>

            <div class="container mt-3">
                <div class="row">
                    ${categories.map((cat) =>
                        html`
                        <div class="blue_card col-md-4 col-12">
                            <ul class="list-unstyled">
                                <button class="blue_tile btn btn-primary btn-lg" @click=${() => Router.go(cat.route)}>

                                    <li class="media">
                                    <div class="media-body"><img class="img-fluid" src=${cat.img} alt="">
                                        <h4 class="mt-0 mb-1">${cat.title}</h4>
                                        <h6>${cat.description}</h6>
                                    </div>
                                    </li>
                                </button>

                            </ul>
                        </div>
                        `
                    )}
                </div>
            </div>
        </section>
        <section>
            Skills
            <div class="container">
                <div class="row">
                    <div class="col">HTML</div>
                    <div class="col">CSS</div>
                    <div class="col">JAVA</div>
                    <div class="col">JAVA</div>

                </div>
                <div class="row">
                    <div class="col">HTML</div>
                    <div class="col">chicken</div>
                    <div class="col">JAVA</div>
                    <div class="col">JAVA</div>

                </div>
            </div>
        </section>
        <section>
            <app-experience></app-experience>

        </section>

        <section><div class="col" id="intro">
                            I love using CS as a tool for social change and a way to express creativity!
                        </div></section>



        <section id="experience">
            <h1>Categories</h1>
            <div class="container mt-3">
                <div class="row">
                    ${categories.map((cat) =>
                        html`
                        <div class="blue_card col-md-4 col-12">
                            <ul class="list-unstyled">
                                <button class="blue_tile btn btn-primary btn-lg" @click=${() => Router.go(cat.route)}>

                                    <li class="media">
                                    <div class="media-body"><img class="img-fluid" src=${cat.img} alt="">
                                        <h4 class="mt-0 mb-1">${cat.title}</h4>
                                        <h6>${cat.description}</h6>
                                    </div>
                                    </li>
                                </button>

                            </ul>
                        </div>
                        `
                    )}
                </div>
            </div>
        </section>

        <section id="next"></section>
    </div>

    `;
  }
}
