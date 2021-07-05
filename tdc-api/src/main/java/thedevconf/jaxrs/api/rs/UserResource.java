package thedevconf.jaxrs.api.rs;

import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.api.vo.UserInfoVO;
import thedevconf.jaxrs.ui.BaseResource;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.context.Dependent;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.sql.DataSource;
import javax.ws.rs.*;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

/**
* API Resource for UserInformation, under Authentication
* */
@ApplicationScoped
public class UserResource extends BaseResource {

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


    @GET
    @Produces(APPLICATION_JSON)
    @Path("info")
    public UserInfoVO getInfo() {
        UserInfoVO user = UserInfoVO.getCurrentUserInfoVO();
        System.out.println("Fetching user "+user);
        return user;
    }
}