package thedevconf.cfp.console;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import org.eclipse.microprofile.rest.client.inject.RestClient;

import thedevconf.cfp.service.WhoAmIService;

@Dependent
public class WhoAmIView extends VerticalLayout {
    @Inject
    public WhoAmIView(@RestClient WhoAmIService whoAmIService) {
        add(new Label(whoAmIService.whoami()));
    }
    
}
