package cloud.caravana.vo;

import java.util.*;

public class Mode {
    private String name;
    private List<Edition> editions;
    private List<Track> tracks;
    private String outraCoisa = "CARAVANA CLOUD";

    public String getOutraCoisa() {
        return outraCoisa;
    }

    public Mode(String name){
        this(name, new ArrayList<>(), new ArrayList<>());
    }
    
    public Mode(String name, List<Edition> editions, List<Track> tracks){
        this.name = name;
        this.editions = editions;
        this.tracks = tracks;
    }

    public String getName(){
        return name;
    }

    public List<Edition> getEditions(){
        return editions;
    }

    public List<Track> getTracks() { return tracks; }
}