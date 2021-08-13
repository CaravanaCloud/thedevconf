#!/bin/bash
set -e

export EB_VERSION="$UNIQ-v$(date +%H%M%S)"
export EB_VERSION_KEY="$EB_VERSION/Dockerrun.aws.json"
export EB_CNAME=$EB_VERSION

aws s3 cp Dockerrun.aws.json "s3://$EB_BUCKET/$EB_VERSION_KEY"

aws elasticbeanstalk create-application-version \
    --application-name "$EB_APP" \
    --version-label "$EB_VERSION" \
    --source-bundle S3Bucket="$EB_BUCKET",S3Key="$EB_VERSION_KEY"

aws elasticbeanstalk check-dns-availability --cname-prefix "$EB_CNAME"

echo export EB_VERSION="$EB_VERSION"
echo export EB_CNAME="$EB_CNAME"
