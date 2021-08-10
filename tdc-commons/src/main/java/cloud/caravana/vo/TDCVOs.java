package cloud.caravana.vo;

import static cloud.caravana.vo.EditionStatus.ALL_IN;
import static cloud.caravana.vo.EditionStatus.BASIC;
import static cloud.caravana.vo.EditionStatus.PASSED;
import static cloud.caravana.vo.EditionStatus.SELECTED;

import java.util.List;

public class TDCVOs {

    public Alternatives createAlternatives() {
        return Alternatives.of(createPassVip(),
                createPassPremium(),
                createVIPPass(),
                createConnectPass(),
                createBasicPass(),
                createCorpPass());
    }

    private Mode createPassVip() {
        var editions = List.of(
                new Edition("Innovation", PASSED),
                new Edition("Connections", ALL_IN, createConnectionTracks()),
                new Edition("Transformation", ALL_IN),
                new Edition("Future", ALL_IN));
        var mode = new Mode("Passport Vip", editions);
        return mode;
    }

    private Mode createPassPremium() {
        var editions = List.of(
                new Edition("Innovation", PASSED),
                new Edition("Connections", SELECTED, createConnectionTracks()),
                new Edition("Transformation", SELECTED),
                new Edition("Future", SELECTED));
        var mode = new Mode("Passport Premium", editions);
        return mode;
    }

    private Mode createVIPPass() {
        var editions = List.of(
                new Edition("Innovation", PASSED),
                new Edition("Connections", ALL_IN, createConnectionTracks()),
                new Edition("Transformation", BASIC),
                new Edition("Future", BASIC));
        var mode = new Mode("VIP Pass", editions);
        return mode;
    }

    private Mode createConnectPass() {
        var editions = List.of(
                new Edition("Innovation", PASSED),
                new Edition("Connections", SELECTED /*6*/, createConnectionTracks()),
                new Edition("Transformation", BASIC),
                new Edition("Future", BASIC));
        var mode = new Mode("Connect Pass", editions);
        return mode;
    }

    private Mode createBasicPass() {
        var editions = List.of(
                new Edition("Innovation", PASSED),
                new Edition("Connections", BASIC, createConnectionTracks()),
                new Edition("Transformation", BASIC),
                new Edition("Future", BASIC));
        var mode = new Mode("Basic Pass", editions);
        return mode;
    }

    private Mode createCorpPass() {
        var editions = List.of(
                new Edition("Innovation", PASSED),
                new Edition("Connections", SELECTED, createConnectionTracks()),
                new Edition("Transformation", SELECTED),
                new Edition("Future", SELECTED));
        var mode = new Mode("Corp Pass", editions);
        return mode;
    }

    public List<Track> createConnectionTracks() {
        String firstDay = "23-03-2021";
        String secondDay = "24-03-2021";
        String thirdDay = "25-03-2021";

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

        Track coaching = new Track("Coaching", secondDay);
        Track management = new Track("Management", secondDay);
        Track microservices = new Track("Microservices", secondDay);
        Track dataScience = new Track("Data Science", secondDay);
        Track services = new Track("Services", secondDay);
        Track testes = new Track("Testes", secondDay);
        Track lgpd = new Track("LGPD", secondDay);
        Track java = new Track("Java", secondDay);
        Track web = new Track("Web", secondDay);

        Track kanban = new Track("Kanban", thirdDay);
        Track agility = new Track("Agility", thirdDay);
        Track xp = new Track("XP", thirdDay);
        Track mobile = new Track("Mobile", thirdDay);
        Track dados = new Track("Dados", thirdDay);
        Track transformation = new Track("Transformation", thirdDay);
        Track security = new Track("Security", thirdDay);
        Track cloud = new Track("Cloud", thirdDay);
        Track architecture = new Track("Architecture", thirdDay);
        Track go = new Track("Go", thirdDay);

        return List.of(
                agile, analise, api, js, ai, ux, devtest, devops, net, phyton,
                coaching, management, microservices, dataScience, services, testes, lgpd, java, web,
                kanban, agility, xp, mobile, dados, transformation, security, cloud, architecture, go
        );
    }

}
