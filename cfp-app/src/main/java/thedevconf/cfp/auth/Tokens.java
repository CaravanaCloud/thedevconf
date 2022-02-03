package thedevconf.cfp.auth;

import org.eclipse.microprofile.jwt.JsonWebToken;

import io.quarkus.oidc.RefreshToken;

public class Tokens {

    public static String toString(JsonWebToken idToken, 
        JsonWebToken accessToken, 
        RefreshToken refreshToken) {
        var buf = new StringBuffer();
        var userName = idToken.getClaim("preferred_username");

        buf.append("preferred_username = "+userName);
        buf.append(" idToken: " + idToken.toString());
        buf.append(" accessToken: " + accessToken.toString());
        buf.append(" refreshToken: " + refreshToken.toString());
        return buf.toString(); 
    }

}
