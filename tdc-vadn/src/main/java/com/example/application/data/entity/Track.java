package com.example.application.data.entity;

import java.time.LocalDate;

public class Track {
  public String name;
  public LocalDate date;

  public Track (String name, LocalDate date){
    this.name = name;
    this.date = date;
  }

  public Track() {

  }

  public String getName() {
    return name;
  }

}
