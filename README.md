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
export MYSQL_DB="globalcode"
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

## Install the commons pockage
```
cd tdc-commons
mvn
```

*Remember to re-install the commons package and reload IDE project when entities are changed.*

## Start the API Module
Set the API environment variables (JDBC):
```
export DATASOURCE_URL="jdbc:mysql://$MYSQL_HOST:$MYSQL_PORT/$MYSQL_DB"
export DATASOURCE_KIND="mysql"
export DATASOURCE_USERNAME="root"
export DATASOURCE_PASSWORD="$MYSQL_ROOT_PASSWORD"
export HIBERNATE_ORM_DATABASE_GENERATION=none
```

Start the API service:
```
cd tdc-api
mvn
```

```
Running main method
__  ____  __  _____   ___  __ ____  ______ 
--/ __ \/ / / / _ | / _ \/ //_/ / / / __/
-/ /_/ / /_/ / __ |/ , _/ ,< / /_/ /\ \   
--\___\_\____/_/ |_/_/|_/_/|_|\____/___/   
2021-05-23 12:43:50,496 INFO  [io.quarkus] (Quarkus Main Thread) tdc-api 1.0.0-SNAPSHOT on JVM (powered by Quarkus 1.12.1.Final) started in 1.230s. Listening on: http://localhost:8181
2021-05-23 12:43:50,498 INFO  [io.quarkus] (Quarkus Main Thread) Profile dev activated. Live Coding activated.
2021-05-23 12:43:50,498 INFO  [io.quarkus] (Quarkus Main Thread) Installed features: [cdi, resteasy, resteasy-jackson]
```

Test the application health using the [readiness probe](http://localhost:8181/api/_hc/ready) :
```
 curl -s http://localhost:8181/api/_hc/ready | jq
{
  "uuid": "4bd7e030-5f1b-47a8-9308-0913b440f3ad",
  "sourceIP": "127.0.0.1",
  "acceptTime": [
    2021,
    5,
    23,
    14,
    6,
    9,
    967111196
  ],
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
