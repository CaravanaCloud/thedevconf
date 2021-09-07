FROM debian:stretch-slim 

# Defining default Java and Maven version 
ARG JAVA_VERSION="21.1.0.r11-grl"
ARG MAVEN_VERSION="3.6.2"

WORKDIR /app

# Installing basic packages 
RUN apt-get update && \
	apt-get install -y zip unzip curl && \
	rm -rf /var/lib/apt/lists/* && \
	rm -rf /tmp/*

# Downloading SDKMAN! 
RUN curl -s "https://get.sdkman.io" | bash

# Installing Java and Maven, removing some unnecessary SDKMAN files 
RUN bash -c "source $HOME/.sdkman/bin/sdkman-init.sh && \
    yes | sdk install java $JAVA_VERSION && \
    yes | sdk install maven $MAVEN_VERSION && \
    rm -rf $HOME/.sdkman/archives/* && \
    rm -rf $HOME/.sdkman/tmp/*"

# Copy all current files to docker image
COPY . .
