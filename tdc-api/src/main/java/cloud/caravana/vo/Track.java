package cloud.caravana.vo;

import java.time.LocalDate;

public class Track {
  private String name;
  private LocalDate date;

  public Track (String name, LocalDate date){
    this.name = name;
    this.date = date;
  }

  public String getName() {
    return name;
  }

  public LocalDate getDate() {
    return date;
  }
}