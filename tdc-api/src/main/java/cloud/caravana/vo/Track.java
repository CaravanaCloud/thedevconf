package cloud.caravana.vo;

import java.time.DayOfWeek;

public class Track {
  String name;
  DayOfWeek day;
  String category;

  public Track (String name, DayOfWeek day, String category){
    this.name = name;
    this.day = day;
    this.category = category;
  }

  public String getName() {
    return name;
  }

  public DayOfWeek getDay() {
    return day;
  }

  public String getCategory() {
    return category;
  }
}