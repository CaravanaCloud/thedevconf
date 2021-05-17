package thedevconf.cfp;


import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouterLink;

@Route("home")
public class HomeView extends VerticalLayout {
    public HomeView(){
        Button button = new Button("Home View");
        add(button);

        Div menu = new Div();
        menu.add(new RouterLink("main", MainView.class));
        add(menu);
    }
}
