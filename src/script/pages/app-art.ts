import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-art')
export class AppArt extends LitElement {

  static get styles() {
    return css`

    .container{
      padding: 70px;
    }
    .row {

      border-color:white;
      border-top: solid;
      border-bottom: solid;
      border-width: small;
      margin-bottom: 25px;
      padding: 25px 50px;

    }

    .row:not(.dont-highlight):hover{
      background-color: purple;
      cursor: pointer;
    }
    .card-title{
      color: chocolate;
      font-weight: bold;
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
        <h1>Art and Writings</h1>
        <div class = "container">
          <div class="row row-cols-1 row-cols-md-3 g-4 dont-highlight">
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">We Got Aux!</h5>
                  <p class="card-text">Put your project description here yippeeeeee. Put your project description here yippeeeeee. Put your project description here yippeeeeee. Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Cyberinfrastructure Management System</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Domo Arigato</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Record Player</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Arcade Games</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">KHAYA Magazine</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Scheduler</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Duke Hockey</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Library Book Drop</h5>
                  <p class="card-text">Put your project description here yippeeeeee.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">This can be caterogry tags</small>
                </div>
              </div>
            </div>

          </div>

        </div>







        <div class="container">
          <div class="row">
            <div class="col-2">May 24, 2022</div>
            <div class="col-8"> Personal: A Semester of Reflection</div>
          </div>
          <div class="row">
            <div class="col-2">Date</div>
            <div class="col-8">After Geoengineering</div>
          </div>
          <div class="row">
            <div class="col-2">Date</div>
            <div class="col-8">Capitalism and Climate Change</div>
          </div>
          <div class="row">
            <div class="col-2">Date</div>
            <div class="col-8"> OpEd: From Tired Black Women</div>
          </div>
          <div class="row">
            <div class="col-2">Date</div>
            <div class="col-8">KHAYA: The Renaissance</div>
          </div>
          <div class="row">
            <div class="col-2">Date</div>
            <div class="col-8">Athletics: Duke Hockey</div>
          </div>


          </div>

        </div>
</div>


      </div>


    `;
  }
}