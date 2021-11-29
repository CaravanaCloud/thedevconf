#!/bin/bash


get_parameter () {
    aws ssm get-parameter --name $1 --query 'Parameter.Value' --output 'text'
}

export TDC_DB_HOST="$(get_parameter 'TDC_DEVENV_DB_HOST')"
export TDC_DB_PASSWORD="$(get_parameter 'TDC_DEVENV_DB_PASSWORD')"
export TDC_DB_USERNAME="$(get_parameter 'TDC_DEVENV_DB_USERNAME')"

mysql -u$TDC_DB_USERNAME -p$TDC_DB_PASSWORD -h$TDC_DB_HOST thedevconf
 