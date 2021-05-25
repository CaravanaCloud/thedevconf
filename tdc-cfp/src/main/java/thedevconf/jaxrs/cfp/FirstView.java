package thedevconf.jaxrs.cfp;

import cloud.caravana.vo.Alternatives;
import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.Route;

import javax.ws.rs.client.*;
import javax.ws.rs.core.Response;
import java.util.Date;

/**
 * The main view contains a button and a click listener.
 */
@Route("first")
// @PWA(name = "Project Base for Vaadin", shortName = "Project Base", enableInstallPrompt = false)
@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class FirstView extends VerticalLayout {

    public FirstView() {
        // Use TextField for standard text input
        TextField textField = new TextField("Your name");
        textField.addThemeName("bordered");

        // Button click listeners can be defined as lambda expressions
        GreetService greetService = new GreetService();
        Button button = new Button("Say hello",
                e -> onClick(textField, greetService));

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

    private Notification onClick(TextField textField, GreetService greetService) {
        Client client = ClientBuilder.newBuilder().build();
        WebTarget target = client.target("http://localhost:8181/api/mode" );
        Response response = target.request().get();
        Alternatives alts = response.readEntity(Alternatives.class);
        System.out.println("### UALALTS " + new Date());
        System.out.println(alts);
        response.close();
        return Notification.show(greetService.greet(textField.getValue()));
    }
}
