#!/bin/bash
set -e

mvn \
  -DskipTests \
  -Dquarkus.container-image.builder=jib \
  -Dquarkus.container-image.build=true \
  -Dquarkus.container-image.push=true \
  -Dquarkus.container-image.registry=registry.hub.docker.com \
  -Dquarkus.jib.base-registry-username=$REGISTRY_USERNAME \
  -Dquarkus.jib.base-registry-password=$REGISTRY_PASSWORD \
   clean package
