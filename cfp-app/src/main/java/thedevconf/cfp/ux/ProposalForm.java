package thedevconf.cfp.ux;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;

import javax.enterprise.context.Dependent;

import static com.vaadin.flow.component.button.ButtonVariant.*;

@Dependent
public class ProposalForm extends VerticalLayout {
    public ProposalForm(){
        add(new TextField("Title"));
        var save = new Button("Save");
        save.addThemeVariants(LUMO_PRIMARY);
        add(save);
    }
}
