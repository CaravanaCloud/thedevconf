package thedevconf.jaxrs.ui;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("")
public class BasicPassForm extends BaseResource {

    @Inject
    Template basicPassForm;

    @Inject
    Template basicPassConfirm;

    @GET
    @Path("basic-pass-form")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance getForm() {
        return instanceOf(basicPassForm);
    }

    @GET
    @Path("basic-pass-confirmation")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance getConfirmation() {
        return instanceOf(basicPassConfirm);
    }
}
