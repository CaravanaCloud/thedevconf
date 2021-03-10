package cloud.caravana.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static javax.ws.rs.core.MediaType.*;

import java.util.List;

import cloud.caravana.vo.*;
import static cloud.caravana.vo.EditionStatus.*;


@Path("/mode")
public class ModeResource {

    @GET
    @Produces(APPLICATION_JSON)
    public Alternatives getAlternatives() {
        return createAlternatives();
    }

    public List<Edition> createEditions(){
        Edition innovation = new Edition("Innovation", PASSED);
        Edition connections = new Edition("Connections", CURRENT);
        Edition transformation = new Edition("Transformation", UPCOMING_ENABLED);
        Edition future = new Edition("Future", UPCOMING_DISABLED);
        return List.of(innovation,connections,transformation,future);
    }

    public Alternatives createAlternatives(){
        // Passport Vip
        List<Edition> passVipEds = createEditions();
        Mode passVip = new Mode("Passport Vip", passVipEds);
        // Passport Premium
        List<Edition> passPremiumEds = createEditions();
        Mode passPremium = new Mode("Passport Premium", passPremiumEds);
        // Vip Pass
        List<Edition> vipPassEds = createEditions();
        Mode vipPass = new Mode("Vip Pass", vipPassEds);
        // Premium Pass
        List<Edition> premiumPassEds = createEditions();
        Mode premiumPass = new Mode("Premium Pass", premiumPassEds);
        // Basic Pass
        List<Edition> basicPassEds = createEditions();
        Mode basicPass = new Mode("Premium Pass", basicPassEds);
        // Corporate Pass
        List<Edition> corpPassEds = createEditions();
        Mode corpPass = new Mode("Corporate Pass", corpPassEds);

        Alternatives alt = new Alternatives();
        alt.addAll(passVip, passPremium, vipPass, premiumPass, basicPass, corpPass);
        return alt;
    }
}