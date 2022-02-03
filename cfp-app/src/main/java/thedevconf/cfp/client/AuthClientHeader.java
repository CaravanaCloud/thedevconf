package thedevconf.cfp.client;

import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;

import org.eclipse.microprofile.jwt.JsonWebToken;
import org.eclipse.microprofile.rest.client.ext.ClientHeadersFactory;

@Dependent
public class AuthClientHeader implements ClientHeadersFactory {
    @Inject
    JsonWebToken accessToken;

    @Override
    public MultivaluedMap<String, String> update(
        MultivaluedMap<String, String> incomingHeaders, 
        MultivaluedMap<String, String> clientOutgoingHeaders) {
        var token = "Bearer " + accessToken.getRawToken();
        return new MultivaluedHashMap<String, String>(){{
            add("Authorization", token);
        }};
    }
}
