FROM registry.access.redhat.com/ubi8/openjdk-17 AS build
ENV MAVEN_ARGX='-B -Dorg.slf4j.simpleLogger.log.org.apache.maven.cli.transfer.Slf4jMavenTransferListener=warn'
COPY . /tmp/src
USER root
RUN mvn -f /tmp/src/pom.xml clean compile vaadin:build-frontend package -Pproduction ${MAVEN_ARGX}

FROM registry.access.redhat.com/ubi8/openjdk-17
EXPOSE 8181
ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en'
ENV JAVA_OPTIONS="-Djava.util.logging.manager=org.jboss.logmanager.LogManager"
COPY  --from=build --chown=1001 /tmp/src/target/quarkus-app/ /tmp/quarkus-app/

USER 1001
ENTRYPOINT [ "java","-jar","/tmp/quarkus-app/quarkus-run.jar" ]
