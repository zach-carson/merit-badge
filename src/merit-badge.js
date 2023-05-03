import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/simple-icon/simple-icon.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";

class MeritBadge extends LitElement {
  static properties = {
    date: { type: String },
    title_: { type: String },
    buttontext: { type: String },
    activeNode: { type: Object },
    skillsOpened: { type: Boolean },
    icon: {type: String},
    iconcolor: {type: String},
    newcolor: {
      type: String,
      reflect: true,
      attribute: 'newcolor'
    },
  };

  static styles = css`
  
    .badge {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: red;
      position: relative:
      padding-top: 5px;
      
      margin: 10px;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #fff;
      box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      font-weight: normal;
    }
    


    .badge-icon {
      position: relative;
      top: -100px;
      left: 3px;
    }

    .badge-lock {
      position: relative;
      width: 210px;
      height: 210px;
      top: -87.5px;
      left: -5px;
      border-radius: 50%;
      background-color: grey;
    }

    .lock-icon {
      position: relative;
      top: 95px;
      left: 95px;
    }

    .button {
      position: absolute;
      left: 75px;
      top: 165px;
      width: 65px;
      padding-bottom: 0px;
      border: solid black;
      background-color: white;
    }

    .button-text {
      text-align: center;
      color: black;
    }

    :host {
      display: inline-block;
    }

    .text1 {
      position: relative;
      text-align: center;
      padding-bottom: 0px;
      top: 15px;
    }

    .text2 {
      position: relative;
      text-align: center;
      
      top: 110px;
    }

    :host([newcolor="red"]) .badge {
      background-color: var (--badge-accent-color, red);
      background-color: red;
      color: black;
    }

    :host([newcolor="blue"]) .badge {
      background-color: var (--badge-accent-color, blue);
      background-color: blue;
      color: white;
      box-shadow: black;
      box-shadow: 0 0 0 4px blue;
    }

    :host([newcolor="green"]) .badge {
      background-color: var (--badge-accent-color, green);
      background-color: green;
      color: white;
      box-shadow: 0 0 0 4px green;
    }

    :host([newcolor="brown"]) .badge {
      background-color: var (--badge-accent-color, brown);
      background-color: brown;
      color: white;
      box-shadow: 0 0 0 4px brown;
    }

    :host([newcolor="yellow"]) .badge {
      background-color: var (--badge-accent-color, yellow);
      background-color: yellow;
      border-color: yellow;
      color: black;
      box-shadow: 0 0 0 4px yellow;
    }




  `;

  constructor() {
    super();
    this.newcolor = null;
    this.title_ = 'Badge Name';
    this.date = 'Badge Date';
    this.buttontext = 'Unlock';
    this.icon = 'android'
    
  }


  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
  }

  render() {
    return html` 
    
        <div class="badge">
          <div class="icon"><div>
          <div class="badge-text">

            <div class='text1'>
              <div id="text">${this.date}</h1>
            </div>

            <div class='text2'>
              <div id="text">${this.title_}</h1>
            </div>
              
            <div class="badge-icon">
              <simple-icon accent-color=${this.iconcolor} icon=${this.icon}>
              </simple-icon>
            </div>

          </div>
          </div>
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
        </div>

        <div class="badge-lock" ?hidden="${this.skillsOpened}">
            <simple-icon class="lock-icon" accent-color="black" icon="lock">
            </simple-icon>
        <div>

        <simple-icon-button
              class="button"
              icon="cancel"
              @click="${this.skillClick}"
          >
            <div class="button-text">Unlock<div>
          </simple-icon-button>

          

        
     `;

  }

}

customElements.define('merit-badge', MeritBadge);
