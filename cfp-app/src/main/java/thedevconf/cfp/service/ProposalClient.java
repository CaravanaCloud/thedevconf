package thedevconf.cfp.service;

import org.eclipse.microprofile.rest.client.annotation.RegisterClientHeaders;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;
import thedevconf.cfp.client.AuthClientHeader;
import thedevconf.model.cfp.Proposal;

import javax.ws.rs.POST;
import javax.ws.rs.Path;

@RegisterRestClient(configKey = "proposal")
@RegisterClientHeaders(AuthClientHeader.class)
public interface ProposalClient {
    @POST
    void postProposal(Proposal proposal);
}
