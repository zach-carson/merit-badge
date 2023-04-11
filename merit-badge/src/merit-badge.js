import { LitElement, html, css } from 'lit';

class MeritBadge extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css``;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html` <main></main> `;
  }
}

customElements.define('merit-badge', MeritBadge);
