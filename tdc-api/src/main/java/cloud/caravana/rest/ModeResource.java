package cloud.caravana.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import static javax.ws.rs.core.MediaType.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.util.Calendar;
import java.util.Date;
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
        List<Track> tracks = createTracks();
        // Passport Vip
        List<Edition> passVipEds = createEditions();
        Mode passVip = new Mode("Passport Vip", passVipEds, tracks);
        // Passport Premium
        List<Edition> passPremiumEds = createEditions();
        Mode passPremium = new Mode("Passport Premium", passPremiumEds, tracks);
        // Vip Pass
        List<Edition> vipPassEds = createEditions();
        Mode vipPass = new Mode("Vip Pass", vipPassEds, tracks);
        // Premium Pass
        List<Edition> premiumPassEds = createEditions();
        Mode premiumPass = new Mode("Premium Pass", premiumPassEds, tracks);
        // Basic Pass
        List<Edition> basicPassEds = createEditions();
        Mode basicPass = new Mode("Premium Pass", basicPassEds, tracks);
        // Corporate Pass
        List<Edition> corpPassEds = createEditions();
        Mode corpPass = new Mode("Corporate Pass", corpPassEds, tracks);

        Alternatives alt = new Alternatives();
        alt.addAll(passVip, passPremium, vipPass, premiumPass, basicPass, corpPass);
        return alt;
    }

    public List<Track> createTracks() {
        Date firstDay = new Date(23-03-2021);
        Track agile = new Track("Agile", firstDay);
        Track analise = new Track("Análise", firstDay);
        Track api = new Track("API", firstDay);
        Track js = new Track("JS", firstDay);
        Track ai = new Track("AI", firstDay);
        Track ux = new Track("UX", firstDay);
        Track devtest = new Track("Devtest", firstDay);
        Track devops = new Track("Devops", firstDay);
        Track net = new Track(".NET", firstDay);
        Track phyton = new Track("Phyton", firstDay);

        return List.of(agile, analise, api, js, ai, ux, devtest, devops, net, phyton);
    }
}