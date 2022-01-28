package thedevconf.cfp.dev;

import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.ComponentEventListener;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

@Route("/dev/ux")
public class DevView extends VerticalLayout {
    TextField inUsername = new TextField();
    TextField inName = new TextField();
    Button btnLogin = new Button("Login");
    Button btnLogout = new Button("Logout");

    public DevView() {
        var label = new Label("Dev View");
        inUsername.setLabel("Username");
        inName.setLabel("Name");
        btnLogin.addClickListener(onLogin);
        btnLogout.addClickListener(onLogout);
        add(label,
                inUsername,
                btnLogin,
                btnLogout);
    }

    ComponentEventListener<ClickEvent<Button>> onLogin = clickEvent -> {
        Notification.show("Login " + inUsername.getValue() + " " + inName.getValue());
    };

    ComponentEventListener<ClickEvent<Button>> onLogout = clickEvent -> {
        inUsername.clear();
        Notification.show("Logout ");
    };

}
