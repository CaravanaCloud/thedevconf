#!/bin/bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
RDIR=$(dirname $DIR)

JDK=${JDK:-"21.3.0.r17-grl"}
AWS_PAGER=""

echo "Using the GraalVM JDK"
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk use java "$JDK"

echo "Check AWS Access"
aws sts get-caller-identity

echo "Loading environment"

get_parameter () {
    aws ssm get-parameter --name $1 --query 'Parameter.Value' --output 'text'
}

export TDC_DB_HOST="$(get_parameter 'TDC_DEVENV_DB_HOST')"
export TDC_DB_PASSWORD="$(get_parameter 'TDC_DEVENV_DB_PASSWORD')"
export TDC_DB_USERNAME="$(get_parameter 'TDC_DEVENV_DB_USERNAME')"

export QUARKUS_DATASOURCE_DB_KIND="mysql"
export QUARKUS_DATASOURCE_USERNAME="$TDC_DB_USERNAME"
export QUARKUS_DATASOURCE_PASSWORD="$TDC_DB_PASSWORD"
export QUARKUS_DATASOURCE_JDBC_URL="jdbc:mysql://$TDC_DB_HOST/thedevconf?useSSL=false"


echo "DIR=$DIR"
echo "JDK=$JDK"

echo "QUARKUS_DATASOURCE_JDBC_URL=$QUARKUS_DATASOURCE_JDBC_URL"

#sleep 5
echo "Starting Application using Maven"
mvn -f $RDIR/tdc-api/pom.xml clean quarkus:dev

echo "done"
