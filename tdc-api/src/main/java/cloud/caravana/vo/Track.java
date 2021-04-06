package cloud.caravana.vo;

import java.util.Date;

public class Track {
  private String name;
  private Date date;

  public Track (String name, Date date){
    this.name = name;
    this.date = date;
  }

  public String getName() {
    return name;
  }

  public Date getDate() {
    return date;
  }
}