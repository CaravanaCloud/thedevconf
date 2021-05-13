import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

class AboutView extends PolymerElement {
  _attachDom(dom) {
    // Do not use a shadow root
    this.appendChild(dom);
  }
  static get template() {
    return html` <div>Content placeholder</div> `;
  }

  static get is() {
    return 'about-view';
  }
}

customElements.define(AboutView.is, AboutView);
