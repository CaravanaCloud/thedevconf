package thedevconf.jaxrs.api.rs;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.sql.DataSource;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import thedevconf.jaxrs.api.entity.Mode;
import thedevconf.jaxrs.api.entity.User;
import thedevconf.jaxrs.api.services.RegistrationService;
import thedevconf.jaxrs.api.services.UserService;
import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.auth.UserSession;
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
    @Inject
    RegistrationService registrationService;

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
        @Valid RegistrationVO vo
    ) {
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
        boolean isUserInBasicPass = registrationService.isRegistered(user, Mode.BASICPASS);
        user.setUserInBasicPass(isUserInBasicPass);
        return user;
    }
}