package thedevconf.cfp.dev;

import javax.inject.Inject;

import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

import thedevconf.cfp.UserSession;
import thedevconf.cfp.UserSessions;

@Route("/dev/ux")
public class DevView extends VerticalLayout {
    TextField inUsername = new TextField();
    TextField inName = new TextField();
    Button btnLogin = new Button("Login");
    Button btnLogout = new Button("Logout");

    public DevView() {
        var session = UserSessions.getCurrent();
        var label = new Label("Session UUID " + session);
        inUsername.setLabel("Username " + session.getUsername() );
        inName.setLabel("Name ");
        btnLogin.addClickListener(onLogin);
        btnLogout.addClickListener(onLogout);
        add(label,
                inUsername,
                btnLogin,
                btnLogout);
    }

    //TODO: Proper Login
    ComponentEventListener<ClickEvent<Button>> onLogin = clickEvent -> {
        var session = UserSessions.getCurrent();
        var username = inUsername.getValue();
        session.setUsername(username);
        session.setName(username);
        session.setEmail(username+"@"+username+".com");
        Notification.show("Login " + inUsername.getValue() + " " + inName.getValue());
    };

    //TODO: Proper Logout
    ComponentEventListener<ClickEvent<Button>> onLogout = clickEvent -> {
        var session = UserSessions.getCurrent();
        session.setUsername(null);
        inUsername.clear();
        Notification.show("Logout ");
    };

}
