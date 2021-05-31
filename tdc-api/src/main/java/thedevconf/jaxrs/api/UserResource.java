package thedevconf.jaxrs.api;

import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.ui.BaseResource;
import thedevconf.jaxrs.ui.SummaryTemplate;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.sql.DataSource;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

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
    public SummaryResource getSummary(){
        return summary;
    }

    @Path("registration")
    @GET
    @Produces(APPLICATION_JSON)
    public RegistrationVO getRegistrationVO(@QueryParam("clientId") String clientId){
        return RegistrationVO.of(clientId);
    }

    @Path("registration")
    @POST
    @Produces(APPLICATION_JSON)
    @Consumes(APPLICATION_JSON)
    public RegistrationVO getRegistrationVO(
            @QueryParam("clientId") String clientId,
            RegistrationVO vo){
        System.out.println(vo);
        //em.merge()...
        //ds.getConnection().createStatement()
        return vo;
    }
}
