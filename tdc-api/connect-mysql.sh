#!/bin/bash
set -e
echo ""
echo "Starting mysql container"
docker run --rm \
  --name tdc-db \
  -p 0.0.0.0:$MYSQL_PORT:3306 \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  -e MYSQL_DATABASE=$MYSQL_DB \
  -d mysql:$MYSQL_VERSION

echo "Connect to mysql:"
echo mysql --host=$MYSQL_HOST --port=$MYSQL_PORT -uroot -p$MYSQL_ROOT_PASSWORD $MYSQL_DB


