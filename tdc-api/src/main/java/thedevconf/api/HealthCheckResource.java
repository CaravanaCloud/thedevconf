package thedevconf.api;

import thedevconf.api.entity.Heartbeat;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.enterprise.inject.Instance;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.logging.Logger;

@Path("_hc")
public class HealthCheckResource {
    Logger log = Logger.getLogger("HealthCheck");

    @Inject
    Instance<EntityManager> em;

    @Path("live")
    @GET
    @Produces(APPLICATION_JSON)
    public Heartbeat live() {
        return Heartbeat.of();
    }

    @Path("ready")
    @GET
    @Produces(APPLICATION_JSON)
    @Transactional
    public Heartbeat ready() {
        try{
            Heartbeat hb = Heartbeat.of();
            return em.get().merge(hb);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
