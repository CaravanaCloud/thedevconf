package thedevconf.jaxrs.api;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("api")
public class APIResource {
    @Inject
    HealthCheckResource healthCheck;

    @Path("_hc")
    public HealthCheckResource getHealthCheckResource(){
        return healthCheck;
    }
}
