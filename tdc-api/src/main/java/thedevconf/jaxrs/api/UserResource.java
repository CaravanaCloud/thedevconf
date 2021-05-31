package thedevconf.jaxrs.api;

import thedevconf.jaxrs.api.vo.RegistrationVO;
import thedevconf.jaxrs.ui.BaseResource;
import thedevconf.jaxrs.ui.SummaryTemplate;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

@ApplicationScoped
public class UserResource extends BaseResource {
    @Inject
    private SummaryResource summary;

    @Path("summary")
    public SummaryResource getSummary(){
        return summary;
    }

    @Path("registration")
    @GET
    public RegistrationVO getRegistrationVO(@QueryParam("clientId") String clientId){
        return RegistrationVO.of(clientId);
    }
}
