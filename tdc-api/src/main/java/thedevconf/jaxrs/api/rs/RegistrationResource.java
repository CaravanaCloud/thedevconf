package thedevconf.jaxrs.api.rs;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import thedevconf.jaxrs.api.services.RegistrationService;
import thedevconf.jaxrs.api.vo.RegistrationVO;
import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@ApplicationScoped
public class RegistrationResource {
    @Inject
    RegistrationService registrationService;

    @GET
    @Produces(APPLICATION_JSON)
    public RegistrationVO get() {
        return new RegistrationVO();
    }

    @POST
    @Produces(APPLICATION_JSON)
    @Consumes(APPLICATION_JSON)
    public Response post(
        @NotNull
        @Valid RegistrationVO registration
    ) {
        registrationService.register(registration);
        return Response.ok().build();
    }
}
