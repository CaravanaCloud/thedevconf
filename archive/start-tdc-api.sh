#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

mvn -DskipTests=true
mvn -f tdc-api/pom.xml -DskipTests=true
