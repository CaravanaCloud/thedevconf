#!/bin/bash

./delete-env.sh

aws elasticbeanstalk delete-application \
    --application-name "$EB_APP"

aws s3 rb s3://$EB_BUCKET --force

aws iam remove-role-from-instance-profile --instance-profile-name $EB_PROFILE --role-name $EB_ROLE

aws iam delete-instance-profile --instance-profile-name $EB_PROFILE

aws iam delete-role-policy --role-name "$EB_ROLE" --policy-name "$EB_POLICY"

aws iam delete-role --role-name "$EB_ROLE"

