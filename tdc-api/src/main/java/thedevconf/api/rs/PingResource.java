package thedevconf.api.rs;

import javax.ws.rs.GET;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.Path;

@Path("/ping")
public class PingResource {

    @GET
    public String ping(@HeaderParam("user-agent") String userAgent){
        return "Pong (" + userAgent+ ")";
    }
    
}
