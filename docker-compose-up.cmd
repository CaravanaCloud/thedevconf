mvn -f .\tdc-api\pom.xml clean package;
mvn -f .\cfp-app\pom.xml clean package -Pproduction;
docker compose up;

