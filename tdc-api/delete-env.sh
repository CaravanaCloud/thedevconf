#!/bin/bash

aws elasticbeanstalk terminate-environment \
    --environment-name "$EB_ENV"
