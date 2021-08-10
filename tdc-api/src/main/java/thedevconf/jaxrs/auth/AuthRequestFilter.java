package thedevconf.jaxrs.auth;

import java.util.logging.Logger;
import javax.inject.Inject;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.ext.Provider;
import thedevconf.jaxrs.api.entity.UserSession;

@Provider
public class AuthRequestFilter implements ContainerRequestFilter {

    static final String CLIENT_ID = "tdc.clientId";
    static final Logger logger = Logger.getLogger("AuthRequestFilter");

    @Inject
    UserSessionService sessionService;

    @Override
    public void filter(ContainerRequestContext context) {
        String path = context.getUriInfo().getPath();
        StringBuilder msg = new StringBuilder();
        msg.append("AuthRequestFilter.filter( \n");
        msg.append("path = " + path + "\n");
        Cookie cookie = context.getCookies().get(CLIENT_ID);
        String clientId = "NO COOKIE FOR YOU";
        if (cookie != null) {
            clientId = cookie.getValue();
            UserSession user = sessionService.ofClientId(clientId);
            ThreadLocalUserInfo.set(user);
        }
        msg.append("clientId = " + clientId + "\n");
        msg.append(") \n");
        logger.info(msg.toString());
        /*
        if ("/secret".equals()) {
            context.abortWith(Response.accepted("forbidden!").build());
        }
         */
    }
}