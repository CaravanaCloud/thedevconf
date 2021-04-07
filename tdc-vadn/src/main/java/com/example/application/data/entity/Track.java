package com.example.application.data.entity;

public class Track {
  public String name;
  public String date;

  public Track (String name, String date){
    this.name = name;
    this.date = date;
  }

  public Track() {

  }

  public String getName() {
    return name;
  }

  public String getDate() {
    return date;
  }

}
