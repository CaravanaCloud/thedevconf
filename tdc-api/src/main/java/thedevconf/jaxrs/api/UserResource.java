package thedevconf.jaxrs.api;

import thedevconf.jaxrs.ui.BaseResource;
import thedevconf.jaxrs.ui.SummaryTemplate;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Path;

@ApplicationScoped
public class UserResource extends BaseResource {
    @Inject
    private SummaryResource summary;

    @Path("summary")
    public SummaryResource getSummary(){
        return summary;
    }
}
