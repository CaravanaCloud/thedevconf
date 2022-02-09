package thedevconf.api.entity;

import thedevconf.model.cfp.Proposal;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "cfp_proposal")
public class ProposalEntity  extends Proposal {

    public static ProposalEntity of(Proposal proposal) {
        var entity = new ProposalEntity();
        entity.setTitle(proposal.getTitle());
        return entity;
    }
}
