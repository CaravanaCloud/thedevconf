package thedevconf.cfp;

import com.vaadin.flow.component.orderedlayout.*;

import org.keycloak.authorization.client.AuthzClient;

import javax.enterprise.context.Dependent;

import com.vaadin.flow.component.html.*;

@Dependent
public class LoginComponent extends VerticalLayout {

    public LoginComponent() {
        var label = new Label("Login Here");
        var authz = AuthzClient.create();
        /*
        authzClient.init(
            "http://localhost:8080/auth",
            "thedevconf-cfp",
            "thedevconf-cfp",
            "http://localhost:8080/auth/realms/thedevconf-cfp/protocol/openid-connect/auth");  
        */
        
        add(label);
    }
}
