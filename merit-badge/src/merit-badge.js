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

    .date {
      center: 
      position: relative;
      width: 400px;
      height: 400px;
    }

    .date span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg) skewY(30deg);
    }

    .title {
      position: relative;
      width: 400px;
      height: 400px;
    }

    .title span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg) skewY(30deg);
    }
  
  `;

  constructor() {
    super();
    this.header = 'My app';
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
    </main> `;
  }
}

customElements.define('merit-badge', MeritBadge);
