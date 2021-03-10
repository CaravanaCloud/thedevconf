package cloud.caravana.vo;

import java.util.*;
import java.util.stream.*;
import static java.util.Arrays.*;
import static java.util.stream.Collectors.*;

public class Alternatives {
    List<Mode> modes = new ArrayList<>();


    public void addAll(Mode... modes){
        this.modes = Arrays.asList(modes);
    }

    public List<Mode> getModes(){
        return modes;
    }
}
