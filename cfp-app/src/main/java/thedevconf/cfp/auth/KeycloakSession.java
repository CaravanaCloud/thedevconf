package thedevconf.cfp.auth;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;

import io.quarkus.security.identity.SecurityIdentity;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import cloud.caravana.auth.ClientSession;
import io.quarkus.oidc.IdToken;
import io.quarkus.oidc.RefreshToken;
import thedevconf.cfp.service.PingService;
import thedevconf.cfp.service.WhoAmIService;

import java.util.Locale;
import java.util.ResourceBundle;

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
        return ! securityIdentity.isAnonymous();
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

    @Inject
    SecurityIdentity securityIdentity;

    @Override
    public String getUserDisplayName() {
        System.out.println(securityIdentity);
        System.out.println(Tokens.toString(idToken, accessToken, refreshToken));

        if(securityIdentity.isAnonymous()) {
            return "NOT LOGGED IN";
        }else {
            return securityIdentity.getPrincipal().getName();
        }
    }

    static final Locale pt = new Locale("pt");

    @Override
    public Locale getLocale() {
        return pt;
    }

    @Override
    public ResourceBundle getCFPMessages() {
        return ResourceBundle.getBundle("cfp_app", getLocale());
    }

}
