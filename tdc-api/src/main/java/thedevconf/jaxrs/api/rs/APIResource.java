package thedevconf.jaxrs.api.rs;

import thedevconf.jaxrs.api.rs.HealthCheckResource;
import thedevconf.jaxrs.api.rs.UserResource;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Path;

@Path("api")
public class APIResource {
    @Inject
    HealthCheckResource healthCheck;

    @Inject
    UserResource userResource;

    @Path("_hc")
    public HealthCheckResource getHealthCheckResource() {
        return healthCheck;
    }

    @Path("user")
    public UserResource getUserResource() {
        return userResource;
    }
}