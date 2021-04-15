package com.example.application.data.service;

import cloud.caravana.vo.Alternatives;
import com.example.application.data.entity.Track;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.*;


@Service
public class TracksService {
  private static final String DEFAULT_API_URL = "http://localhost:8181/api/";
  private final WebClient webClient;

  public TracksService(@Autowired WebClient.Builder webClientBuilder) {
    this.webClient = webClientBuilder.baseUrl(getAPIUrl()).build();
  }

  private String getAPIUrl() {
    Map<String, String> env = System.getenv();
    return env.getOrDefault("TDC_API_URL",DEFAULT_API_URL);
  }

  public Alternatives getAlternatives(){
    try {
      Alternatives alt = this.webClient.get()
                                       .uri("/mode")
                                       .retrieve()
                                       .toEntity(Alternatives.class)
                                       .block()
                                       .getBody();
      return alt;
    }catch (Exception ex){
      ex.printStackTrace();
      return null;
    }
  }
  public List<Track> getTracks() {
    JsonNode body = this.webClient.get().uri("/mode").retrieve().toEntity(JsonNode.class).block().getBody();
    ObjectMapper objectMapper = new ObjectMapper();
    return new ArrayList<>();
    //Arrays.asList(objectMapper.readValue(body.get("modes").get(0).get("tracks").toString(), Track[].class));
  }
}