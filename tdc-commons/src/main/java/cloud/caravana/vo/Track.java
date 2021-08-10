package cloud.caravana.vo;

public class Track {
    private String name;
    private String date;

    public Track() {
        this("", "");
    }

    public Track(String name, String date) {
        this.name = name;
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public String getDate() {
        return date;
    }
}