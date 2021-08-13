#!/bin/bash

aws elasticbeanstalk terminate-environment \
    --environment-name "$EB_ENV"

aws elasticbeanstalk delete-application \
    --application-name "$EB_APP"

aws s3 rb s3://$EB_BUCKET --force

aws iam remove-role-from-instance-profile --instance-profile-name $EB_PROFILE --role-name $EB_ROLE

aws iam delete-instance-profile --instance-profile-name $EB_PROFILE

aws iam delete-role --role-name $EB_ROLE

