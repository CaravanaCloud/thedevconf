#!/bin/bash
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$DIR/utilities.sh"

docker run -ti --rm -p 0.0.0.0:8080:8080 \
    -e KEYCLOAK_ADMIN="$(get_param TDC_DEVENV_KEYCLOAK_ADMIN)" \
    -e KEYCLOAK_ADMIN_PASSWORD="$(get_param TDC_DEVENV_KEYCLOAK_ADMIN_PASSWORD)" \
    -e DB_ADDR="$(get_param TDC_DEVENV_DB_HOST)" \
    -e DB_PORT="3306" \
    -e DB_DATABASE="keycloak" \
    -e DB_USER="$(get_param TDC_DEVENV_DB_USERNAME)" \
    -e DB_PASSWORD="$(get_param TDC_DEVENV_DB_PASSWORD)" \
    quay.io/keycloak/keycloak:17.0.0 \
    start-dev

# end_script
