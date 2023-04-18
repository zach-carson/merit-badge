import { LitElement, html, css } from 'lit';

class MeritBadge extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .badge {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: red;
      border: solid black;

      margin: 10px;
      font-size: 21px;
      font-weight: bold;
      line-height: 1.3em;
      border: 2px dashed #fff;
      box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
      text-shadow: -1px -1px #aa3030;
      font-weight: normal;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector('#badge');
  }

  skillClick() {
    this.skillsOpened = !this.skillsOpened;
  }

  render() {
    return html` 
    <main>
        <div class="badge">
          <div class="badge-text">
            <div class="date"><span>date<span></div>
            <div class="title"><span>title<span></div>
          <div>
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

          <simple-icon-button
            icon="cancel"
            @click="${this.skillClick}"
          >
          </simple-icon-button>
    </main> `;
  }
}

customElements.define('merit-badge', MeritBadge);
