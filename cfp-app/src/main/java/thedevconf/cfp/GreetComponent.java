package thedevconf.cfp;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.textfield.TextField;


@Tag("div")
public class GreetComponent extends Component{
    public GreetComponent(GreetService greetService){
         // Use TextField for standard text input
         var textField = new TextField("Your name");
         textField.addThemeName("bordered");
 
         // Button click listeners can be defined as lambda expressions
         var button = new Button("Say hello", e -> Notification
                 .show(greetService.greet(textField.getValue())));
 
         // Theme variants give you predefined extra styles for components.
         // Example: Primary button is more prominent look.
         button.addThemeVariants(ButtonVariant.LUMO_PRIMARY);

         var btnLogin = new Button("Login", e -> Notification.show("Go Login!"));

        // Theme variants give you predefined extra styles for components.
        // Example: Primary button is more prominent look.
        btnLogin.addThemeVariants(ButtonVariant.LUMO_TERTIARY);
 
         // You can specify keyboard shortcuts for buttons.
         // Example: Pressing enter in this view clicks the Button.
         button.addClickShortcut(Key.ENTER);
 
        getElement().appendChild(textField.getElement(), 
        button.getElement(),
        btnLogin.getElement());
    }
    
}
