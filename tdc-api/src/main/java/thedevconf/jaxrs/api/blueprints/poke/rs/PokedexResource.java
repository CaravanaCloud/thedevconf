package thedevconf.jaxrs.api.blueprints.poke.rs;

import thedevconf.jaxrs.api.blueprints.poke.dao.JDBCPokedex;
import thedevconf.jaxrs.api.blueprints.poke.dao.JPAPokedex;
import thedevconf.jaxrs.api.blueprints.poke.vo.PokedexVO;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/api/poke")
@ApplicationScoped
public class PokedexResource {
    @Inject
    JDBCPokedex jdbcPokedex;

    @Inject
    JPAPokedex jpaPokedex;


    @Path("jdbc")
    @GET
    @Produces(APPLICATION_JSON)
    public PokedexVO getAllJDBC(){
        return PokedexVO.of(jdbcPokedex.findAll());
    }

    @Path("jpa")
    @GET
    @Produces(APPLICATION_JSON)
    public PokedexVO getAllJPA(){
        return PokedexVO.of(jpaPokedex.findAll());
    }
}
