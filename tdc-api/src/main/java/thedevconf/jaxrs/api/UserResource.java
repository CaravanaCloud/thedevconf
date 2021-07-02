package thedevconf.jaxrs.api;

import io.quarkus.oidc.IdToken;
import io.quarkus.oidc.RefreshToken;
import org.eclipse.microprofile.jwt.JsonWebToken;
import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.api.vo.UserInfoVO;
import thedevconf.jaxrs.ui.BaseResource;
import thedevconf.jaxrs.ui.SummaryTemplate;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.sql.DataSource;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

/**
* API Resource for UserInformation, under Authentication
* */
@Dependent
public class UserResource extends BaseResource {
    /**
     * Injection point for the ID Token issued by the OpenID Connect Provider
     *
    @Inject
    @IdToken
    JsonWebToken idToken;
    /

    /**
     * Injection point for the Access Token issued by the OpenID Connect Provider
     *
    @Inject
    JsonWebToken accessToken;
    /

    /**
     * Injection point for the Refresh Token issued by the OpenID Connect Provider

    @Inject
    RefreshToken refreshToken;
     */

    @Inject
    SummaryResource summary;

    //hibernate
    @Inject
    EntityManager em;

    //jdbc
    @Inject
    DataSource ds;

    @Path("summary")
    public SummaryResource getSummary() {
        return summary;
    }

    @Path("registration")
    @GET
    @Produces(APPLICATION_JSON)
    public RegistrationVO getRegistrationVO(@QueryParam("clientId") String clientId) {
        return RegistrationVO.of(clientId);
    }

    @Path("registration")
    @POST
    @Produces(APPLICATION_JSON)
    @Consumes(APPLICATION_JSON)
    public RegistrationVO getRegistrationVO(
            @QueryParam("clientId") String clientId,
            RegistrationVO vo) {
        System.out.println(vo);
        //em.merge()...
        //ds.getConnection().createStatement()
        return vo;
    }

    /**
     * Returns the tokens available to the application. This endpoint exists only for demonstration purposes, you should not
     * expose these tokens in a real application.
     *
     * @return a map containing the tokens available to the application
    @GET
    @Path("tokens")
    public String getTokens() {
        StringBuilder response = new StringBuilder().append("<html>")
                .append("<body>")
                .append("<ul>");

        Object userName = this.idToken.getClaim("preferred_username");

        if (userName != null) {
            response.append("<li>username: ").append(userName.toString()).append("</li>");
        }

        Object scopes = this.accessToken.getClaim("scope");

        if (scopes != null) {
            response.append("<li>scopes: ").append(scopes.toString()).append("</li>");
        }

        response.append("<li>refresh_token: ").append(refreshToken.getToken() != null).append("</li>");

        return response.append("</ul>").append("</body>").append("</html>").toString();
    }
     */


    @GET
    @Path("info")
    public UserInfoVO getInfo() {
        UserInfoVO user = null;
        return user;
    }
}