package thedevconf.cfp.ux;

import javax.enterprise.inject.Instance;
import javax.inject.Inject;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

import thedevconf.cfp.UserSession;

/**
 * The main view contains a button and a click listener.
 */
@Route("")
public class MainView extends VerticalLayout {

    @Inject
    public MainView(
        //UserSession session,
        Instance<LoginComponent> loginView) {
       // Use custom CSS classes to apply styling. This is defined in shared-styles.css.
       addClassName("centered-content");
       var view = (Component) null;
       if (false){//session.isAuthenticated()){
        view = new HomeView();
       }else {
        view = loginView.get();
       }
       add(view);
    }
}
