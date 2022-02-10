package thedevconf.cfp.ux;

import com.vaadin.flow.component.ClickEvent;
import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.binder.Binder;
import com.vaadin.flow.data.binder.PropertyId;
import com.vaadin.flow.data.binder.ValidationException;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import thedevconf.cfp.service.ProposalClient;
import thedevconf.model.cfp.Proposal;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import static com.vaadin.flow.component.button.ButtonVariant.*;

@Dependent
public class ProposalForm extends VerticalLayout {

    Binder<Proposal> binder = new Binder<>(Proposal.class);
    @PropertyId("title")
    private TextField txtTitle = new TextField("Title");
    private Proposal proposal;
    private ProposalClient proposals;

    @Inject
    public ProposalForm(@RestClient ProposalClient proposals){
        this.proposals = proposals;
        proposal = new Proposal();
        binder.bindInstanceFields(this);

        add(txtTitle);
        var save = new Button("Save");
        save.addThemeVariants(LUMO_PRIMARY);
        save.addClickListener(this::onSave);
        add(save);
    }

    private void onSave(ClickEvent<Button> buttonClickEvent) {
        System.out.println("Save");
        try {
            binder.writeBean(proposal);
        } catch (ValidationException e) {
            e.printStackTrace();
        }
        proposals.postProposal(proposal);
    }
}
