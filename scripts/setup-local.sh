#!/bin/sh

# Install SDKMan
# curl -s "https://get.sdkman.io" | bash

# Installl GraalVM
# sdk install java 21.3.0.r17-grl
# sdk install maven

# Install AWS CLI
# curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
# unzip awscliv2.zip
# ./aws/install

# Export Environment Variables

# Secrets 
# aws ssm get-parameter --name 'TDC_DEVENV_DB_HOST' --query 'Parameter.Value' --output 'text'
# aws ssm get-parameter --name 'TDC_DEVENV_DB_PASSWORD' --query 'Parameter.Value' --output 'text'
# aws ssm get-parameter --name 'TDC_DEVENV_DB_USERNAME' --query 'Parameter.Value' --output 'text'

# Quarkus
# QUARKUS_DATASOURCE_DB_KIND="mysql"
# QUARKUS_DATASOURCE_USERNAME="$TDC_DB_USERNAME"
# QUARKUS_DATASOURCE_PASSWORD="$TDC_DB_PASSWORD"
# QUARKUS_DATASOURCE_JDBC_URL="jdbc:mysql://$TDC_DB_HOST/thedevconf?useSSL=false"





