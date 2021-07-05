package thedevconf.jaxrs.api.rs;

import javax.enterprise.context.ApplicationScoped;
import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import java.util.Collections;
import java.util.Map;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("api/google")
@ApplicationScoped
public class GoogleSignInResource {

    @Path("tokensignin")
    @POST
    @Consumes(APPLICATION_JSON)
    @Produces(APPLICATION_JSON)
    public JsonObject tokenSignIn(Map<String, String> body){
        System.out.println(body);
        return JsonObject.EMPTY_JSON_OBJECT;
    }

    @Path("tokensignin")
    @GET
    @Consumes(APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String getTokenSignIn(Map<String, String> body){
        return body.toString();
    }
}
