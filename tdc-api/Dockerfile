FROM maven:3.5.2-jdk-9 AS build
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

FROM registry.access.redhat.com/ubi8/ubi:8.4

ARG RUN_JAVA_VERSION=1.3.8
ARG JDK_VERSION="22.0.0.2.r17-grl"
ARG MAVEN_VERSION="3.8.4"

ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en'
# Install java and the run-java script
# Also set up permissions for user `1001`
RUN yum -y install curl ca-certificates zip unzip \
    && yum -y update \
    && yum -y clean all \
    && mkdir /deployments \
    && chown 1001 /deployments \
    && chmod "g+rwX" /deployments \
    && chown 1001:root /deployments \
    && curl https://repo1.maven.org/maven2/io/fabric8/run-java-sh/${RUN_JAVA_VERSION}/run-java-sh-${RUN_JAVA_VERSION}-sh.sh -o /deployments/run-java.sh \
    && chown 1001 /deployments/run-java.sh \
    && chmod 540 /deployments/run-java.sh \
#    && echo "securerandom.source=file:/dev/urandom" >> /etc/alternatives/jre/lib/security/java.security \
    && curl -s "https://get.sdkman.io"  --output "get.sdkman.io" \
    && source "./get.sdkman.io" \
    && source "/root/.sdkman/bin/sdkman-init.sh" \
    && sdk install java $JDK_VERSION < /dev/null \
    && sdk default java $JDK_VERSION < /dev/null \
    && java --version \
    && echo "done"

# Configure the JAVA_OPTIONS, you can add -XshowSettings:vm to also display the heap size.
ENV JAVA_OPTIONS="-Dquarkus.http.host=0.0.0.0 -Djava.util.logging.manager=org.jboss.logmanager.LogManager"
# We make four distinct layers so if there are application changes the library layers can be re-used
COPY --chown=1001 target/quarkus-app/lib/ /deployments/lib/
COPY --chown=1001 target/quarkus-app/*.jar /deployments/
COPY --chown=1001 target/quarkus-app/app/ /deployments/app/
COPY --chown=1001 target/quarkus-app/quarkus/ /deployments/quarkus/

EXPOSE 8181
USER 1001

ENV PATH=/root/.sdkman/candidates/java/current/bin:$PATH
ENV PATH=/root/.sdkman/candidates/scala/current/bin:$PATH
ENV PATH=/root/.sdkman/candidates/sbt/current/bin:$PATH

RUN find /deployments

# ENTRYPOINT [ "java","-jar","/deployments/quarkus-run.jar " ]
ENTRYPOINT [ "/deployments/run-java.sh" ]
