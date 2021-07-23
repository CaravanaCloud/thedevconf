package thedevconf.jaxrs.api.rs;

import cloud.caravana.App;
import thedevconf.jaxrs.api.entity.User;
import thedevconf.jaxrs.api.services.UserService;
import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.auth.UserSession;
import thedevconf.jaxrs.ui.BaseResource;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.sql.DataSource;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;

import java.util.Set;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

/**
 * API Resource for UserInformation, under Authentication
 */
@ApplicationScoped
public class UserResource {

    @Inject
    SummaryResource summary;

    //hibernate
    @Inject
    EntityManager em;

    //jdbc
    @Inject
    DataSource ds;

    @Inject
    UserService userService;

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

    @Path("user-data")
    @POST
    @Consumes(APPLICATION_JSON)
    @Produces(APPLICATION_JSON)
    public User create(User user) {
        userService.create(user);
        System.out.println(user);
        return user;
    }

    @GET
    @Produces(APPLICATION_JSON)
    @Path("info")
    public UserSession getInfo() {
        UserSession user = UserSession.getCurrent();
        return user;
    }
}