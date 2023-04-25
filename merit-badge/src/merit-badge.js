import { LitElement, html, css } from 'lit';

class MeritBadge extends LitElement {
  static properties = {
    date: { type: String },
    title_: { type: String },
    buttontext: { type: String },
    activeNode: { type: Object },
    skillsOpened: { type: Boolean },
  };

  static styles = css`
  
    .badge {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: red;
      position: absolute:

      margin: 10px;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #fff;
      box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
    }

    


    .button {
      position: absolute;
      left: 80px;
      top: 230px;
      width: 65px;
      padding-bottom: 0px;
      border: solid black;
      background-color: white;
    }

    .button-text {
      text-align: center;
    }
  `;

  constructor() {
    super();
    this.title_ = 'Badge Title';
    this.date = 'Badge Date';
    this.buttontext = 'Unlock';
  }

  render() {
    return html` 
    <main>
        <div class="badge">
          
        <div class="badge-text">
            <div class="date">${this.date}</div>
            <div class="title">${this.title_}</div>
          <div>


          <simple-icon-button
              class="button"
              icon="cancel"
              @click="${this.skillClick}"
          >
            <div class="button-text">Unlock<div>
          </simple-icon-button>

        </div>

        <absolute-position-behavior
            justify
            position="bottom"
            allow-overlap
            sticky
            auto
            .target="${this.activeNode}"
            ?hidden="${!this.skillsOpened}"
          >
        </absolute-position-behavior>
  
    </main> `;
  }

  skillClick() {
    this.skillsOpened = !this.skillsOpened;
  }
}

customElements.define('merit-badge', MeritBadge);
