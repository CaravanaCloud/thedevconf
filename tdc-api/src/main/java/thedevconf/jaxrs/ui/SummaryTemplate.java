package thedevconf.jaxrs.ui;

import static javax.ws.rs.core.MediaType.TEXT_HTML;

import io.quarkus.qute.Template;
import io.quarkus.qute.TemplateInstance;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

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
