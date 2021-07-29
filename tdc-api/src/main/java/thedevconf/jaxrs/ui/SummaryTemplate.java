package thedevconf.jaxrs.ui;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

import static javax.ws.rs.core.MediaType.*;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;

@ApplicationScoped
public class SummaryTemplate extends BaseResource {

    @Inject
    Template summary;

    @GET
    @Produces(TEXT_HTML)
    public TemplateInstance get() {
        return instanceOf(summary);
    }
}
