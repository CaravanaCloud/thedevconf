package thedevconf.cfp;

import javax.inject.Inject;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

/**
 * The main view contains a button and a click listener.
 */
@Route("")
public class MainView extends VerticalLayout {

    @Inject
    GreetService greetService;

    UserSession session = new UserSession();

    public MainView() {
       // Use custom CSS classes to apply styling. This is defined in shared-styles.css.
       addClassName("centered-content");
       var view = (Component) null;
       if (session.isAuthenticated()){
        view = new HomeComponent();
       }else {
        view = new GreetComponent(greetService);
       }
       add(view);
    }
}
