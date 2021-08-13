#!/bin/bash
set -e
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

echo "Exporting variables to config file:"

export CONFIG_FILE="$SCRIPT_DIR/.env"

rm $CONFIG_FIL
echo "QUARKUS_DATASOURCE_JDBC_URL=$DATASOURCE_URL" >> $CONFIG_FILE
echo "QUARKUS_DATASOURCE_USERNAME=$DATASOURCE_USERNAME" >> $CONFIG_FILE
echo "QUARKUS_DATASOURCE_PASSWORD=$DATASOURCE_PASSWORD" >> $CONFIG_FILE
echo "QUARKUS_DATASOURCE_DB_KIND=$DATASOURCE_KIND" >> $CONFIG_FILE
echo "QUARKUS.HIBERNATE_ORM_DATABASE_GENERATION=$HIBERNATE_ORM_DATABASE_GENERATION" >> $CONFIG_FILE
echo "--- [$CONFIG_FILE] ---"
cat $CONFIG_FILE

echo ""
echo "Starting mysql container"
docker run --rm \
  --name $MYSQL_DB \
  -p 0.0.0.0:$MYSQL_PORT:3306 \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  -e MYSQL_DATABASE=$MYSQL_DB \
  -d mysql:$MYSQL_VERSION

echo "Connect to mysql:"
echo mysql --host=$MYSQL_HOST --port=$MYSQL_PORT -uroot -p$MYSQL_ROOT_PASSWORD $MYSQL_DB

