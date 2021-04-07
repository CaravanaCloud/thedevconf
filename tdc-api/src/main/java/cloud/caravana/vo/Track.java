package cloud.caravana.vo;

import java.text.SimpleDateFormat;

public class Track {
  private String name;
  private String date;

  public Track (String name, String date){
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