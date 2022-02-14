#!/bin/bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$DIR/utilities.sh"

#KEYCLOAK_VERSION=17.0.0
#KEYCLOAK_IMAGE=quay.io/keycloak/keycloak
KEYCLOAK_VERSION=16.1.1
KEYCLOAK_IMAGE=jboss/keycloak
KEYCLOAK_TAG=$KEYCLOAK_IMAGE:$KEYCLOAK_VERSION

docker run -ti --rm -p 0.0.0.0:8080:8080 \
    -e KEYCLOAK_ADMIN="$(get_param TDC_DEVENV_KEYCLOAK_ADMIN)" \
    -e KEYCLOAK_ADMIN_PASSWORD="$(get_param TDC_DEVENV_KEYCLOAK_ADMIN_PASSWORD)" \
    -e KC_HOSTNAME_STRICT="false" \
    -e DB_VENDOR="mysql" \
    -e DB_ADDR="$(get_param TDC_DEVENV_DB_HOST)" \
    -e DB_PORT="3306" \
    -e DB_DATABASE="keycloak?useSSL=false" \
    -e DB_USER="$(get_param TDC_DEVENV_DB_USERNAME)" \
    -e DB_PASSWORD="$(get_param TDC_DEVENV_DB_PASSWORD)" \
    $KEYCLOAK_TAG
# end_script