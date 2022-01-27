package thedevconf.api.rs;

import java.util.Map;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import org.jboss.resteasy.annotations.cache.NoCache;

import io.quarkus.oidc.UserInfo;
import io.quarkus.security.identity.SecurityIdentity;

@Path("/api/users")
public class UsersResource {

    @Inject
    SecurityIdentity identity;

    @Inject
    UserInfo userInfo;

    @GET
    @Path("/info")
    @NoCache
    @RolesAllowed("user")	
    public Map<String,String> info() {
        return  Map.of(
            "username", userInfo.getString("sub"),
            "email", userInfo.getString("email")
            );
    }

    @GET
    @Path("/me")
    @NoCache
    @RolesAllowed("user")	
    public User me() {
        return new User(identity);
    }

    public static class User {

        private final String userName;

        User(SecurityIdentity identity) {
            this.userName = identity.getPrincipal().getName();
        }

        public String getUserName() {
            return userName;
        }
    }
}