package thedevconf.api.rs;

import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/")
@ApplicationScoped
public class RootResource {
    @GET
    @Produces("text/plain")
    public String getRoot() {
        return "Welcome to thedevconf api";
    }
}
