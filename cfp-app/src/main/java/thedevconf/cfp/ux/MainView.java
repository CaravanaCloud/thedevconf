package thedevconf.cfp.ux;

import javax.enterprise.inject.Instance;
import javax.inject.Inject;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

import thedevconf.cfp.console.HomeView;

/**
 * The main view contains a button and a click listener.
 */
@Route("oldmain")
public class MainView extends VerticalLayout {

    @Inject
    public MainView(
        Instance<HomeView> homeView,
        Instance<LoginComponent> loginView) {
       // Use custom CSS classes to apply styling. This is defined in shared-styles.css.
       addClassName("centered-content");
       var view = (Component) null;
       if (false){//session.isAuthenticated()){
        view = homeView.get();
       }else {
        view = loginView.get();
       }
       add(view);
    }
}
