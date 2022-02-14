#!/bin/bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$DIR/utilities.sh"

KEYCLOAK_ADMIN=admin

echo docker run -p 8080:8080 \
    -e KEYCLOAK_ADMIN=$KEYCLOAK_ADMIN \
    -e KEYCLOAK_ADMIN_PASSWORD="$(get_parameter KEYCLOAK_ADMIN_PASSWORD)" \
    quay.io/keycloak/keycloak:17.0.0 \
    start-dev

end_script
