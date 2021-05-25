package thedevconf.jaxrs.cfp;

import com.vaadin.flow.component.ClientCallable;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;

@Tag("vaadin-google-login")
@JsModule("./src/vaadin-google-login.ts")
@JsModule("https://apis.google.com/js/platform.js")
public class GoogleLogin extends LitTemplate {

    interface GoogleUserLoggedIn {
        void userLoggedIn(String token);
    }

    private GoogleUserLoggedIn loggedInListener = null;

    public GoogleUserLoggedIn getLoggedInListener() {
        return loggedInListener;
    }

    public void setLoggedInListener(GoogleUserLoggedIn loggedInListener) {
        this.loggedInListener = loggedInListener;
    }

    @ClientCallable
    public void userLoggedIn(String token) {
        if(loggedInListener != null) {
            loggedInListener.userLoggedIn(token);
        }
    }
}
