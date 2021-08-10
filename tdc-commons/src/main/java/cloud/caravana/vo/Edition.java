package cloud.caravana.vo;

import java.util.ArrayList;
import java.util.List;

public class Edition {
    String name;
    EditionStatus status;
    List<Track> tracks;

    public Edition() {
        this("", null);
    }

    public Edition(String name, EditionStatus status) {
        this(name, status, new ArrayList<>());
    }

    public Edition(String name, EditionStatus status, List<Track> tracks) {
        this.name = name;
        this.status = status;
        this.tracks = tracks;
    }

    public String getName() {
        return name;
    }

    public EditionStatus getStatus() {
        return status;
    }

    public List<Track> getTracks() {
        return tracks;
    }

}
