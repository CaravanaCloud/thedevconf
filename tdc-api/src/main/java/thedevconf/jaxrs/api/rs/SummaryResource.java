package thedevconf.jaxrs.api.rs;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import cloud.caravana.vo.Alternatives;
import cloud.caravana.vo.TDCVOs;
import javax.enterprise.context.ApplicationScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;

@ApplicationScoped
public class SummaryResource {
    TDCVOs tdc = new TDCVOs();

    @GET
    @Produces(APPLICATION_JSON)
    public Alternatives getAlternatives() {
        return tdc.createAlternatives();
    }
}
