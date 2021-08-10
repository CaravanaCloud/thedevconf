package thedevconf.jaxrs.auth;

import java.io.IOException;
import java.util.logging.Logger;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

@Provider
public class AuthResponseFilter implements ContainerResponseFilter {

    static final Logger log = Logger.getLogger("AuthResponseFilter");

    @Override
    public void filter(ContainerRequestContext requestContext,
                       ContainerResponseContext responseContext) throws IOException {
        String path = requestContext.getUriInfo().getPath();
        StringBuilder msg = new StringBuilder();
        msg.append("AuthResponseFilter.filter( \n");
        msg.append("path = " + path + "\n");
        ThreadLocalUserInfo.clear();
        log.info(msg.toString());
    }
}