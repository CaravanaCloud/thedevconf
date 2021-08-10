package cloud.caravana.vo;

import static java.util.Arrays.asList;

import java.util.ArrayList;
import java.util.List;

public class Alternatives {
    List<Mode> modes = new ArrayList<>();

    public static Alternatives of(Mode... modes) {
        Alternatives alt = new Alternatives();
        alt.addAll(modes);
        return alt;
    }

    public void addAll(Mode... modes) {
        this.modes = asList(modes);
    }

    public List<Mode> getModes() {
        return modes;
    }
}
