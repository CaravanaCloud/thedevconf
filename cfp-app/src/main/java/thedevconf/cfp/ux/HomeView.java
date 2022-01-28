package thedevconf.cfp.ux;

import javax.inject.Inject;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

import org.eclipse.microprofile.jwt.JsonWebToken;

import io.quarkus.oidc.IdToken;
import io.quarkus.oidc.RefreshToken;


@Route("user/home")
public class HomeView extends VerticalLayout {
        /**
     * Injection point for the ID Token issued by the OpenID Connect Provider
     */
    @Inject
    @IdToken
    JsonWebToken idToken;

    /**
     * Injection point for the Access Token issued by the OpenID Connect Provider
     */
    @Inject
    JsonWebToken accessToken;

    /**
     * Injection point for the Refresh Token issued by the OpenID Connect Provider
     */
    @Inject
    RefreshToken refreshToken;
    
    public HomeView(){
        var buf = new StringBuilder();
        buf.append("Welcome Home FULANO");
        buf.append("<br>----");
        buf.append(idToken);
        buf.append("<br>----");
        buf.append(accessToken);
        buf.append("<br>----");
        buf.append(refreshToken);
        Label label = new Label(buf.toString());
        add(label);
    }

}
