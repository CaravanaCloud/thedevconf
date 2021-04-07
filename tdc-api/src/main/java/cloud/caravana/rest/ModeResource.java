package cloud.caravana.rest;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import static javax.ws.rs.core.MediaType.*;

import cloud.caravana.vo.*;

@Path("/mode")
public class ModeResource {
    TDCVOs tdc = new TDCVOs();

    @GET
    @Produces(APPLICATION_JSON)
    public Alternatives getAlternatives() {
        return tdc.createAlternatives();
    }
}