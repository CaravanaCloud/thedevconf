# TheDevConf

Applications, services and utilities supporting [The Developers Conference](https://thedevconf.com)

# Technologies

Backend: Quarkus / JAX-RS
Frontend: Vaadin

# Running the projects locally

## Install the base tools
* [Docker](https://docs.docker.com/get-docker/)
* [SDKMan](https://sdkman.io/)

### Install Java SDK [GraalVM](https://www.graalvm.org/)
```
sdk install java 21.1.0.r16-grl
```

### Install [Maven](https://sdkman.io/sdks#maven)
```
sdk install maven
```
## Set environment variables

Set the MySQL container environment variables:
```
export MYSQL_ROOT_PASSWORD="SETECAstronomy"
export MYSQL_HOST="127.0.0.1"
export MYSQL_PORT="3307"
export MYSQL_DB="tdc-db"
```

You can also use [DirEnv](https://direnv.net/) or your IDE settings to configure environment variables.

## Start a MySQL database using Docker

Start a MySQL container:
```
docker run --rm \
  --name $MYSQL_DB \
  -p 0.0.0.0:$MYSQL_PORT:3306 \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  -e MYSQL_DATABASE=$MYSQL_DB \
  -d mysql:latest
```

Test your MySQL Connection:
```
mysql --host=$MYSQL_HOST --port=$MYSQL_PORT -uroot -p$MYSQL_ROOT_PASSWORD
```

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| tdc-db             |
+--------------------+
5 rows in set (0.01 sec)
```

## Compile everything
```
mvn
```

*Remember to re-install the commons package and reload IDE project when entities are changed.*

## Start the API Module
Set the API environment variables (JDBC):
```
export QUARKUS_DATASOURCE_JDBC_URL="jdbc:mysql://$MYSQL_HOST:$MYSQL_PORT/$MYSQL_DB"
export QUARKUS_DATASOURCE_DB_KIND="mysql"
export QUARKUS_DATASOURCE_USERNAME="root"
export QUARKUS_DATASOURCE_PASSWORD="$MYSQL_ROOT_PASSWORD"
export HIBERNATE_ORM_DATABASE_GENERATION=none
```

Start the API service:
```
cd tdc-api
mvn
```

```
mvn
[INFO] Scanning for projects...
[INFO]
[INFO] -------------------------< thedevconf:tdc-api >-------------------------
[INFO] Building tdc-api 1.0.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO]
[INFO] --- quarkus-maven-plugin:2.0.2.Final:dev (default-cli) @ tdc-api ---
[INFO] Invoking io.quarkus:quarkus-maven-plugin:2.0.2.Final:generate-code @ tdc-api
[INFO] Invoking org.apache.maven.plugins:maven-resources-plugin:2.6:resources @ tdc-api
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 94 resources
[INFO] Invoking org.apache.maven.plugins:maven-compiler-plugin:3.8.1:compile @ tdc-api
[INFO] Nothing to compile - all classes are up to date
[INFO] Invoking org.apache.maven.plugins:maven-resources-plugin:2.6:testResources @ tdc-api
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory C:\Users\marruda\personal\github.com\dearrudam\thedevconf\tdc-api\src\test\resources
[INFO] Invoking org.apache.maven.plugins:maven-compiler-plugin:3.8.1:testCompile @ tdc-api
[INFO] Nothing to compile - all classes are up to date
Listening for transport dt_socket at address: 5005
2021-08-01 22:48:32,616 INFO  [io.qua.fly.FlywayProcessor] (build-24) Adding application migrations in path '/C:/Users/marruda/personal/github.com/dearrudam/thedevconf/tdc-api/target/classes/db/migration/' using proto
col 'file'
2021-08-01 22:48:33,818 WARN  [io.qua.arc.pro.BeanArchives] (build-90) Failed to index [Ljava.lang.Object;: Class does not exist in ClassLoader QuarkusClassLoader:Deployment Class Loader: DEV
2021-08-01 22:48:33,867 WARN  [io.qua.arc.pro.BeanArchives] (build-90) Failed to index [C: Class does not exist in ClassLoader QuarkusClassLoader:Deployment Class Loader: DEV
2021-08-01 22:48:33,909 WARN  [io.qua.arc.pro.BeanArchives] (build-90) Failed to index [B: Class does not exist in ClassLoader QuarkusClassLoader:Deployment Class Loader: DEV
__  ____  __  _____   ___  __ ____  ______ 
 --/ __ \/ / / / _ | / _ \/ //_/ / / / __/
 -/ /_/ / /_/ / __ |/ , _/ ,< / /_/ /\ \
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/
2021-08-01 22:48:38,533 INFO  [org.fly.cor.int.lic.VersionPrinter] (Quarkus Main Thread) Flyway Community Edition 7.9.2 by Redgate
2021-08-01 22:48:39,062 INFO  [org.fly.cor.int.dat.bas.BaseDatabaseType] (Quarkus Main Thread) Database: jdbc:mysql://127.0.0.1:3307/globalcode (MySQL 8.0)
2021-08-01 22:48:39,193 INFO  [org.fly.cor.int.com.DbMigrate] (Quarkus Main Thread) Current version of schema `globalcode`: 20210729
2021-08-01 22:48:39,196 INFO  [org.fly.cor.int.com.DbMigrate] (Quarkus Main Thread) Schema `globalcode` is up to date. No migration necessary.
2021-08-01 22:48:40,051 INFO  [io.quarkus] (Quarkus Main Thread) tdc-api 1.0.0-SNAPSHOT on JVM (powered by Quarkus 2.0.2.Final) started in 11.208s. Listening on: http://localhost:8181
2021-08-01 22:48:40,053 INFO  [io.quarkus] (Quarkus Main Thread) Profile dev activated. Live Coding activated.
2021-08-01 22:48:40,054 INFO  [io.quarkus] (Quarkus Main Thread) Installed features: [agroal, cdi, flyway, hibernate-orm, hibernate-orm-panache, hibernate-orm-rest-data-panache, hibernate-validator, jdbc-h2, jdbc-mysq
l, narayana-jta, qute, resteasy, resteasy-jackson, resteasy-qute, security, security-jdbc, smallrye-context-propagation, smallrye-openapi, swagger-ui]

--
Tests paused, press [r] to resume, [w] to open the browser, [h] for more options>
```

Test the application health using the [readiness probe](http://localhost:8181/api/_hc/ready) :
```
 curl -s http://localhost:8181/api/_hc/ready | jq
{
  "uuid": "2801a2ba-b318-4967-be1e-b258468437e8",
  "sourceIP": "127.0.0.1",
  "acceptTime": "2021-08-01T22:39:11.1104739",
  "payload": "<3"
}
```

## Start the CFP App
Set the CFP variables:
```
export QUARKUS_DATASOURCE_JDBC="false"
```

Start the API service:
```
cd tdc-cfp
mvn
```

Visit the application at the default address [http://localhost:8282](http://localhost:8282)

## Start the Registration Application
//TODO 


## Docker

You can use docker instead the steps before. Open thedevconf project in your terminal and run the follows commands:

```shell
$ docker-compose run --service-ports api bash
$ mvn clean install
$ cd tdc-api
$ ./mvnw compile quarkus:dev -Dquarkus.http.host=0.0.0.0
```

Back the browser and see the project running on:

http://localhost:8181.
.
.
.
.
.
.
.
.
.
.
.
.
.
