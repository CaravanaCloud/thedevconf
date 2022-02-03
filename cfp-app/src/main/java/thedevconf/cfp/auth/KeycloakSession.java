package thedevconf.cfp.auth;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import org.eclipse.microprofile.jwt.JsonWebToken;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import cloud.caravana.auth.ClientSession;
import io.quarkus.oidc.IdToken;
import io.quarkus.oidc.RefreshToken;
import thedevconf.cfp.service.PingService;
import thedevconf.cfp.service.WhoAmIService;

@Dependent
public class KeycloakSession 
    implements ClientSession {
    
    @Inject
    @RestClient
    PingService pingService;

    @Inject
    @RestClient
    WhoAmIService whoamiService;

    @Inject
    @IdToken
    JsonWebToken idToken;

    @Inject
    JsonWebToken accessToken;

    @Inject
    RefreshToken refreshToken;

    public String getUserInfo() {
        return Tokens.toString(idToken, 
            accessToken, 
            refreshToken);
    }

    public boolean isLoggedIn() {
        return accessToken != null 
            && idToken != null;
    }

    @Override
    public String getIdToken() {
        return idToken.toString();
    }

    @Override
    public String getAccessToken() {
        return accessToken.toString();
    }

    @Override
    public String getRefreshToken() {
        return refreshToken.toString();
    }

    @Override
    public String ping() {
        return pingService.ping().toString() ;
    }

    @Override
    public String whoami() {
        return whoamiService.whoami();
    }
    
}
