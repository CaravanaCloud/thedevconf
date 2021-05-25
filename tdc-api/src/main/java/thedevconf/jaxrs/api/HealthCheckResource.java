package thedevconf.jaxrs.api;

import thedevconf.jaxrs.api.entity.Heartbeat;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Instance;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.logging.Logger;

@ApplicationScoped
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
            EntityManager em = this.em.get();
            return em.merge(hb);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
