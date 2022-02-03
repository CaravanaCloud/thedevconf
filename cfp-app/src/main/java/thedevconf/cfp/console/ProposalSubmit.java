package thedevconf.cfp.console;

import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("TalkSubmit")
public class ProposalSubmit extends VerticalLayout{

    public ProposalSubmit(){
        add(new Label("Proposal Submit"));
    }
    
}
