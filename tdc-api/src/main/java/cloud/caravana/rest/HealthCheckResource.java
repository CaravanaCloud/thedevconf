package cloud.caravana.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("health")
public class HealthCheckResource {

    @GET
    public String getHealth(){
        return "LGTM";
    }

}
