import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-education')
export class AppEducation extends LitElement {

  static get styles() {
    return css`
    .t{
      height: 100vh;
      width: 100vw;
      background-image: url(/assets/images/chap1.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;

  }

    .schools{
      display: flex;
      flex-direction: column;
    }

    h1 {
      text-align: center;
      padding: 30px 0 0 0;
    }

    h4 {
      font-size: 1.2em;
      text-align: center;
      padding: 0 0 30px 0;
    }



    .timeline {
      list-style: none;
      padding: 20px 0 20px;
      position: relative;
    }
    .timeline:before {
      top: 0;
      bottom: 0;
      position: absolute;
      content: "";
      width: 3px;
      background-color: transparent;
      margin-left: -1.5px;
      left: 20px;
    }
    @media (min-width: 576px) {
      .timeline:before {
        left: 50%;
      }
    }
    .timeline > li {
      margin-bottom: 20px;
      position: relative;
      padding-left: 55px;
    }
    .timeline > li:after, .timeline > li:after {
      content: "";
      display: table;
      clear: both;
    }
    .timeline > li .panel {
      width: 100%;
      float: left;
      border-radius: 3px;
      overflow: hidden;
      position: relative;
      background: transparent;

    }
    .timeline > li .panel summary {
      display: block;
      -webkit-user-select: none;
      user-select: none;
      outline: none;
      padding: 20px;
      margin-bottom: 0px;
      transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);
      transition-property: margin, background;
      font-weight: 600;
      text-align:center;
      color: grey;

    }
    .timeline > li .panel summary::-webkit-details-marker {
      display: none;
    }
    .timeline > li .panel summary:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    .timeline > li .panel p {
      padding: 0 20px 10px;
    }
    .timeline > li .panel[open] summary {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      background: wheat;
    }
    @media (min-width: 576px) {
      .timeline > li {
        padding-left: 0px;
      }
      .timeline > li .panel {
        width: 100%;
      }
      .timeline > li {
        padding-right: 25%;
        padding-left: 25%;
      }


    }




    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {

  }



  render() {
    return html`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      <div class="t">



      </div>

      <section class="schools">
        <div class="container">
          <h1>Education</h1>
          <h4>Click through to see my journey through education, academic achievents, milestones, and setbacks </h4>

          <ul class="timeline">
            <li class="timeline">
              <details class="panel">
                <summary>Duke University</summary>
                <p><strong>Area of Study:</strong> Computer Science, Education, Computaional Media<br>
                  <br>
                  <strong>Graduation Date:</strong> yeah this is all i did i dont know what to put here yet yabadabadooooooooooooooooooo</p>
              </details>
            </li>

            <li class="timeline">
              <details class="panel">
                <summary>High School</summary>
                <p>kenai is a crazy dog i wonder when he will reaslise that the food is done hmm well lets see hmm yeah here we go</p>
              </details>
            </li>

            <li class="timeline">
              <details class="panel">
                <summary>Before High School</summary>
                <p>working at teh zoo working at the zoo</p>
              </details>
            </li>

            



          </ul>
        </div>











      </section>

</div>
    `;
  }
}
