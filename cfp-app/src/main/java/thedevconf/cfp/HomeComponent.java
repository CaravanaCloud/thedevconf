package thedevconf.cfp;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.html.Label;

@Tag("div")
public class HomeComponent extends Component {
    public HomeComponent(){
        Label label = new Label("Welcome Home FULANO");
        
        getElement().appendChild(label.getElement());
    }

}
