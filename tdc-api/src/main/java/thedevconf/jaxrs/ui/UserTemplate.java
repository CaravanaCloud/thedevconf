package thedevconf.jaxrs.ui;

import static javax.ws.rs.core.MediaType.TEXT_HTML;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("user")
public class UserTemplate extends BaseResource {
    @Inject
    SummaryTemplate summary;

    @Inject
    Template registration;

    @Inject
    Template userArea;

    @Inject
    Template registrationConfirmation;

    @Path("summary")
    public SummaryTemplate getSummary() {
        return summary;
    }

    @GET
    @Path("registration")
    @Produces(TEXT_HTML)
    public TemplateInstance get() {
        return instanceOf(registration);
    }

    @GET
    @Path("registration-confirmation")
    @Produces(TEXT_HTML)
    public TemplateInstance getRegistrationConfirmation() {
        return instanceOf(registrationConfirmation);
    }

    @GET
    @Path("user-area")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance getUserArea() {
        return instanceOf(userArea);
    }
}
