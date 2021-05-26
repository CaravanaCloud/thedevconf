package thedevconf.jaxrs.ui;

import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("user")
public class UserTemplate extends BaseResource {
    @Inject
    SummaryTemplate summary;

    @Path("summary")
    public SummaryTemplate getSummary(){
        return summary;
    }
}
