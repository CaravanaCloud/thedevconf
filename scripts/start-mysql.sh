#!/bin/bash
set -e

export MYSQL_PORT=${MYSQL_PORT:-"3307"}
export MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD:-"Masterkey123"}
export MYSQL_DB=${MYSQL_DB:-"thedevconf"}
export MYSQL_VERSION=${MYSQL_VERSION:-5.7}

echo "Starting mysql container"
CMD="docker run --rm -d \
  --name "mysql-thedevconf" \
  -p 0.0.0.0:$MYSQL_PORT:3306 \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  -e MYSQL_DATABASE=$MYSQL_DB \
  mysql:$MYSQL_VERSION"

echo "$CMD"
eval "$CMD"

echo "Setting environment variables"
rm -f .envrc
envsubst < .envrc.tpl > .envrc

direnv allow

echo "Useful commands"
echo mysql --host=$MYSQL_HOST --port=$MYSQL_PORT -uroot -p$MYSQL_ROOT_PASSWORD $MYSQL_DB

