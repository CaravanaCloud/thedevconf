package thedevconf.cfp.console;

import javax.inject.Inject;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

import cloud.caravana.auth.ClientSession;

@Route("")
public class MainView extends VerticalLayout {
    @Inject
    public MainView(
        ClientSession session, 
        GreetService greetService) {
        
        if (session != null 
            && session.isLoggedIn()){
            add(new Label("Hello! Welcome back, " + session.getUserDisplayName()));
        }else {
            add(new Label("Hello stranger ;)"));
        }

        add(new Label("Ping API? " + session.ping()) );


        // Use TextField for standard text input
        TextField textField = new TextField("Your name");
        textField.addThemeName("bordered");

        // Button click listeners can be defined as lambda expressions
        Button button = new Button("Say hello", e -> Notification
                .show(greetService.greet(textField.getValue())));

        // Theme variants give you predefined extra styles for components.
        // Example: Primary button is more prominent look.
        button.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

        // You can specify keyboard shortcuts for buttons.
        // Example: Pressing enter in this view clicks the Button.
        button.addClickShortcut(Key.ENTER);

        // Use custom CSS classes to apply styling. This is defined in shared-styles.css.
        addClassName("centered-content");
        
        add(textField, button);
        
    }
}
