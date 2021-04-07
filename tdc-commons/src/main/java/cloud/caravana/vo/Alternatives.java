package cloud.caravana.vo;

import java.util.*;
import java.util.stream.*;
import static java.util.Arrays.*;
import static java.util.stream.Collectors.*;

public class Alternatives {
    List<Mode> modes = new ArrayList<>();

    public static Alternatives of(Mode... modes) {
        Alternatives alt = new Alternatives();
        alt.addAll(modes);
        return alt;
    }

    public void addAll(Mode... modes){
        this.modes = asList(modes);
    }

    public List<Mode> getModes(){
        return modes;
    }
}
