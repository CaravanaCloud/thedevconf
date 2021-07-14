package thedevconf.jaxrs.ui;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import thedevconf.jaxrs.api.vo.RegistrationVO;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static javax.ws.rs.core.MediaType.TEXT_HTML;

@Path("user")
public class UserTemplate extends BaseResource {
    @Inject
    SummaryTemplate summary;

    @Inject
    Template registration;

    @Inject
    Template userArea;

    @Path("summary")
    public SummaryTemplate getSummary(){
        return summary;
    }

    @GET
    @Path("registration")
    @Produces(TEXT_HTML)
    public TemplateInstance get() {
        return instanceOf(registration);
    }

    @GET
    @Path("user-area")
    @RolesAllowed("user")
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance getUserArea() {
        return instanceOf(userArea);
    }
}