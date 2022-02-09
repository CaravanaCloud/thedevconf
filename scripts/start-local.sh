#!/bin/bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
RDIR=$(dirname "$DIR")

JDK=${JDK:-"17.0.2-open"}
AWS_PAGER=""

echo "Using JDK $JDK"
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk use java "$JDK"

echo "Check AWS Access"
aws sts get-caller-identity

echo "DIR=$DIR"
echo "JDK=$JDK"

echo "Starting Application [local mode]"

sleep 3

echo "Build shared module"
mvn -f $RDIR/tdc-model/pom.xml

echo "Build and start api"
mvn -f $RDIR/tdc-api/pom.xml -Ddebug=5151 clean quarkus:dev &
sleep 30

echo "Build and start cfp"
mvn -f $RDIR/cfp-app/pom.xml -Ddebug=5152 clean quarkus:dev &
sleep 30

echo "done. Try this to test:"
API_PID=$(jps | grep tdc-api | cut -d' ' -f 1)
CFP_PID=$(jps | grep cfp-app | cut -d' ' -f 1)

echo "[API_PID $API_PID] curl http://localhost:8181/api"
echo "[CFP_PID $CFP_PID] curl http://localhost:8182/"

echo "To stop:"
echo 'kill $(jps | grep tdc-api | cut -d' ' -f 1) $(jps | grep cfp-app | cut -d' ' -f 1)'

echo "Enjoy!"
