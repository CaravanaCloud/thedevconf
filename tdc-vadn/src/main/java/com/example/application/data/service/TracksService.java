package com.example.application.data.service;

import com.example.application.data.entity.Track;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;


@Service
public class TracksService {

  private final WebClient webClient;

  public TracksService(@Autowired WebClient.Builder webClientBuilder) {
    this.webClient = webClientBuilder.baseUrl("http://localhost:8181").build();
  }

  public List<Track> getTracks() {
    JsonNode body = this.webClient.get().uri("/mode").retrieve().toEntity(JsonNode.class).block().getBody();
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      return Arrays.asList(objectMapper.readValue(body.get("modes").get(0).get("tracks").toString(), Track[].class));
    } catch (JsonProcessingException e) {
      e.printStackTrace();
    }
    return null;
  }
}