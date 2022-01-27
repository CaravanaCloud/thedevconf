package thedevconf.cfp;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;


@Route("user/home")
public class HomeView extends VerticalLayout {
    public HomeView(){
        Label label = new Label("Welcome Home FULANO");
        
        add(label);
    }

}
