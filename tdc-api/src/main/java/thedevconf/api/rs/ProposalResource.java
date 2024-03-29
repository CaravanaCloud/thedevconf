package thedevconf.api.rs;

import thedevconf.api.entity.ProposalEntity;
import thedevconf.model.cfp.Proposal;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.UUID;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;

@Path("/user/proposal")
public class ProposalResource {
    @Inject
    EntityManager em;

    @Path("new")
    @GET
    public Proposal getNew(){
        return new Proposal();
    }

    @Path("create")
    @GET
    @Transactional
    public Proposal getCreate(){
        var proposal = new ProposalEntity();
        em.persist(proposal);
        return proposal;
    }

    // http://localhost:8181/api/proposal/uuid/27db6270-e027-446c-a295-9e77f433edd5
    @Path("uuid/{uuid}")
    @GET
    @Produces(APPLICATION_JSON)
    public Proposal getByUUID(@PathParam("uuid") String uuid){
        return em.find(ProposalEntity.class, uuid);
    }

    @POST
    @Consumes(APPLICATION_JSON)
    @Transactional
    public void postProposal(Proposal proposal){
        var entity = ProposalEntity.of(proposal);
        em.persist(entity);
    }


}
