import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-experience')
export class AppExperience extends LitElement {

  static get styles() {
    return css`
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
      background-color: black;
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
      background: #fff;
      box-shadow: 1px 2px 80px 0 rgba(0, 0, 0, 0.1);
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
    }
    @media (min-width: 576px) {
      .timeline > li {
        padding-left: 0px;
      }
      .timeline > li .panel {
        width: 50%;
      }
      .timeline > li:not(:nth-child(even)) {
        padding-right: 90px;
      }
      .timeline > li:nth-child(even) {
        padding-left: 90px;
      }
      .timeline > li:nth-child(even) > :nth-child(even) {
        float: right;
      }
    }
    .timeline > li > .icon {
      color: #d9d9d9;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 2.5em;
      text-align: center;
      position: absolute;
      left: 20px;
      margin-left: -25px;
      background-color: black;
      z-index: 999;
      border-radius: 50%;
      font-family: Font Awesome\ 5 Free;
    }
    .timeline > li > .icon:before {
      content: "";
    }
    @media (min-width: 576px) {
      .timeline > li > .icon {
        left: 50%;
      }
    }
    .timeline > li > .icon.done {
      color: #23b5af;
    }
    .timeline > li > .icon.done:before {
      content: "";
    }
    .timeline > li > .icon.working {
      color: #eeba4c;
    }
    .timeline > li > .icon.working:before {
      content: "";
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
      <div class="container">
        <h1>Experience</h1>
        <h4>Where I honed many of my hard and soft skills in a professional setting</h4>

        <ul class="timeline">
          <li class="timeline">
            <div class="icon done"></div>
            <details class="panel">
              <summary>Nannying</summary>
              <p><strong>date:</strong> forever<br>
                <br>
                <strong>what?:</strong> yeah this is all i did i dont know what to put here yet yabadabadooooooooooooooooooo</p>
            </details>
          </li>
          <li class="timeline">
            <div class="icon done"></div>
            <details class="panel">
              <summary>Undergraduate TA</summary>
              <p>kenai is a crazy dog i wonder when he will reaslise that the food is done hmm well lets see hmm yeah here we go</p>
            </details>
          </li>
          <li class="timeline">
            <div class="icon working"></div>
            <details class="panel">
              <summary>Code+ @ Duke University</summary>
              <p>working at teh zoo working at the zoo</p>
            </details>
          </li>
          <li class="timeline">
            <div class="icon"></div>
            <details class="panel">
              <summary>KHAYA Magazine</summary>
              <p>what do i put here hmm</p>
            </details>
          </li>
          <li class="timeline">
            <div class="icon"></div>
            <details class="panel">
              <summary>Tutoring and Teaching !!!</summary>
              <p>Yeah, I know what it is, but...I'm using it!</p>
            </details>
          </li>
          <li class="timeline">
            <div class="icon"></div>
            <details class="panel">
              <summary>Exelon Nuclear Generation</summary>
              <p>Yeah, I know what it is, but...I'm using it!</p>
            </details>
          </li>
          <li class="timeline">
            <div class="icon"></div>
            <details class="panel">
              <summary>Coaching</summary>
              <p>Participated in tech-related activities, camps, and hackathons.Completed the JP Morgan Chase & Co. work prep program and was selected as a closing speaker.</p>
            </details>
          </li>
          <li class="timeline">
            <div class="icon"></div>
            <details class="panel">
              <summary>Philadelphia Zoo</summary>
              <p>Led STEM activities with middle school girls in Durham public schools.</p>
            </details>
          <li class="timeline">
            <div class="icon"></div>
            <details class="panel">
              <summary>FEMMES</summary>
              <p>Led STEM activities with middle school girls in Durham public schools.</p>
            </details>
          </li>
          </li>
        </ul>
      </div>
    `;
  }
}
