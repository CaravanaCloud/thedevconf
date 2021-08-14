#!/bin/bash
set -e

rm options.txt
envsubst < options.txt.env > options.txt
cat options.txt

echo aws elasticbeanstalk create-environment \
    --cname-prefix "$EB_CNAME" \
    --application-name "$EB_APP" \
    --template-name "$EB_TEMPLATE" \
    --version-label "$EB_VERSION" \
    --environment-name "$EB_ENV" \
    --output json \
    --option-settings file://options.txt

