import { LitElement, html } from "lit-element";
import "@vaadin/vaadin-text-field/vaadin-text-field.js";
import "@vaadin/vaadin-button/vaadin-button.js";

declare global {
  interface Window {
    onSignIn: any;
  }
}

interface VaadinGoogleLoginServerInterface {
  userLoggedIn(text: string): void;
}

class VaadinGoogleLogin extends LitElement {
  private $server?: VaadinGoogleLoginServerInterface;

  render() {
    return html` <div>
      Login with google.
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>`;
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();

    // Add your google client id as a meta tag to the page
    var meta = document.createElement("meta");
    meta.name = "google-signin-client_id";
    meta.content =
      "112902828557-5briq7k42grldiglvve9bfdpsmdmjmpm.apps.googleusercontent.com";
    document.getElementsByTagName("head")[0].appendChild(meta);

    // Notify server with user token after user has signed in
    const component = this;
    window.onSignIn = function (googleUser: any) {
      const id_token = googleUser.getAuthResponse().id_token;
      console.log("id_token: " + id_token);
      component.$server!.userLoggedIn(id_token);
    };

    // Load the Google platform library
    const el = document.createElement("script");
    el.setAttribute("src", "https://apis.google.com/js/platform.js");
    this.appendChild(el);
  }
}

customElements.define("vaadin-google-login", VaadinGoogleLogin);
