#!/bin/bash
set -e

export RDS_SECG=$(aws ec2 create-security-group \
  --group-name telemo-rds-secgrp \
  --description "telemo-rds-secg" \
  --vpc-id $VPC_ID \
  --query "GroupId" \
  --output text)

export RDS_SECG_ID=$(aws ec2 describe-security-groups \
  --filter Name=vpc-id,Values=$VPC_ID Name=group-name,Values=telemo-rds-secgrp \
  --query 'SecurityGroups[*].[GroupId]' \
  --output text)

aws ec2 authorize-security-group-ingress \
  --group-id $RDS_SECG \
  --protocol tcp \
  --port $RDS_PORT \
  --cidr $RDS_CIDR

aws rds create-db-subnet-group \
    --db-subnet-group-name $RDS_NETGRP \
    --db-subnet-group-description "Telemo RDS Subnet Group" \
    --subnet-ids $NET_A $NET_B

export RDS_ID=$(aws rds create-db-instance \
  --db-name $RDS_DB  \
  --db-instance-identifier $RDS_NAME \
  --allocated-storage 20 \
  --db-instance-class db.t3.large \
  --engine mysql \
  --engine-version 5.7 \
  --master-username $RDS_ROOT_USER \
  --master-user-password $RDS_ROOT_PASSWORD \
  --db-subnet-group-name  $RDS_NETGRP \
  --backup-retention-period 0 \
  --publicly-accessible \
  --vpc-security-group-ids $RDS_SECG \
  --query "DBInstance.DBInstanceIdentifier" \
  --output text)

aws rds wait db-instance-available \
  --db-instance-identifier "$RDS_ID"

export RDS_ENDPOINT=$(aws rds describe-db-instances  \
  --db-instance-identifier $RDS_ID  \
  --query "DBInstances[0].Endpoint.Address"  \
  --output text)

export RDS_PORT=$(aws rds describe-db-instances  \
  --db-instance-identifier $RDS_ID  \
  --query "DBInstances[0].Endpoint.Port"\
  --output text)

export RDS_JDBC=jdbc:mysql://$RDS_ENDPOINT:$RDS_PORT/$MYSQL_DB

echo export RDS_ID="$RDS_ID"
echo export RDS_SECG="$RDS_SECG"
echo export RDS_SECG_ID="$RDS_SECG_ID"
echo export RDS_JDBC="$RDS_JDBC"
