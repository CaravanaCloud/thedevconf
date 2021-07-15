package thedevconf.jaxrs.api.rs;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.json.JsonObject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import java.util.Collections;
import java.util.Map;
import java.util.logging.Logger;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson.JacksonFactory;
import thedevconf.jaxrs.Configuration;
import com.google.api.client.json.JsonFactory;
import thedevconf.jaxrs.auth.UserSessionService;

@Path("api/google")
@ApplicationScoped
public class GoogleSignInResource {
    static final Logger log = Logger.getLogger("GoogleSignInResource");
    static final String CLIENT_ID = "tdc.clientId";
    static final String ID_TOKEN = "tdc.idToken";

    @Inject
    Configuration cfg;

    @Inject
    UserSessionService userSessionService;

    @Path("tokensignin")
    @POST
    @Consumes(APPLICATION_JSON)
    @Produces(APPLICATION_JSON)
    public JsonObject tokenSignIn(Map<String, String> body) throws Exception{
        String clientId = body.get(CLIENT_ID);
        String idTokenStr = body.get(ID_TOKEN);
        System.out.println("TOKEN SIGN IN");
        System.out.println(clientId);
        System.out.println(idTokenStr);
        System.out.println("/TOKEN SIGN IN");
        if(idTokenStr != null) {
            validateWithGoogle(clientId, idTokenStr);
        }
        return JsonObject.EMPTY_JSON_OBJECT;
    }

    private void validateWithGoogle(String clientId,
                                    String idTokenStr) throws Exception{
        log.info("validateWithGoogle()");
        HttpTransport transport = new NetHttpTransport();
        JsonFactory jsonFactory = new JacksonFactory();
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                // Specify the CLIENT_ID of the app that accesses the backend:
                .setAudience(Collections.singletonList(cfg.getGoogleClientId()))
                // Or, if multiple clients access the backend:
                //.setAudience(Arrays.asList(CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3))
                .build();
        GoogleIdToken idToken = verifier.verify(idTokenStr);
        if (idToken != null) {
            Payload payload = idToken.getPayload();

            // Print user identifier
            String userId = payload.getSubject();
            System.out.println("User ID: " + userId);

            // Get profile information from payload
            String email = payload.getEmail();
            boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
            String name = (String) payload.get("name");
            String pictureUrl = (String) payload.get("picture");
            String locale = (String) payload.get("locale");
            String familyName = (String) payload.get("family_name");
            String givenName = (String) payload.get("given_name");

            // Use or store profile information
            System.out.println(name);
            userSessionService.updateProfile(
                    clientId,
                    idTokenStr,
                    name,
                    email,
                    emailVerified,
                    pictureUrl,
                    locale,
                    familyName,
                    givenName
            );
        } else {
            System.out.println("Invalid ID token.");
        }
    }

    @Path("tokensignin")
    @GET
    @Consumes(APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public String getTokenSignIn(Map<String, String> body){
        return body.toString();
    }
}