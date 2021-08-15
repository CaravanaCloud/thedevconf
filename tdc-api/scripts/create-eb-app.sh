#!/bin/bash
set -e

echo aws s3 mb "s3://$EB_BUCKET"
aws s3 mb "s3://$EB_BUCKET"

aws elasticbeanstalk create-application --application-name "$EB_APP"

aws iam create-role --role-name "$EB_ROLE" --assume-role-policy-document file://eb-ip-trust.json
aws iam put-role-policy --role-name "$EB_ROLE" --policy-name "$EB_POLICY" --policy-document file://eb-ip-policy.json
aws iam create-instance-profile --instance-profile-name "$EB_PROFILE"
aws iam add-role-to-instance-profile --instance-profile-name "$EB_PROFILE" --role-name "$EB_ROLE"

aws elasticbeanstalk create-configuration-template \
    --application-name "$EB_APP" \
    --template-name "$EB_TEMPLATE" \
    --solution-stack-name "64bit Amazon Linux 2 v3.4.4 running Docker"

echo "elastic beanstalk app created"
