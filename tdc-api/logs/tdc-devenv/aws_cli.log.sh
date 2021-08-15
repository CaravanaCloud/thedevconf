export UNIQ="tdc-devenv-20200814"

export VPC_ID=$(aws ec2 create-vpc \
    --cidr-block 10.0.0.0/16 \
    --query "Vpc.VpcId" \
    --output text)

aws ec2 create-tags --resources "$VPC_ID" \
    --tags Key=Name,Value="$UNIQ-vpc"

aws ec2   modify-vpc-attribute \
  --enable-dns-hostnames \
  --vpc-id "$VPC_ID"

aws ec2 modify-vpc-attribute \
  --enable-dns-support \
  --vpc-id "$VPC_ID"

export IGW_ID=$(aws ec2 create-internet-gateway \
    --query "InternetGateway.InternetGatewayId" \
    --output text)

aws ec2 attach-internet-gateway \
  --vpc-id "$VPC_ID" \
  --internet-gateway-id "$IGW_ID"

export RTB_ID=$(aws ec2 create-route-table \
    --vpc-id $VPC_ID \
    --query "RouteTable.RouteTableId" \
    --output text)

aws ec2 create-route \
    --route-table-id $RTB_ID \
    --destination-cidr-block 0.0.0.0/0 \
    --gateway-id $IGW_ID
#
export NET_DB_A_NAME="$UNIQ-net-db-a"
export NET_DB_A=$(aws ec2 create-subnet \
    --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=$NET_DB_A_NAME}]" \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.11.0/24 \
    --availability-zone us-west-2a \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_DB_A" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_DB_A"  \
    --map-public-ip-on-launch

echo export NET_DB_A=$NET_DB_A

# export NET_DB_A=subnet-00596359160ac0e25

export NET_DB_B_NAME="$UNIQ-net-db-b"
export NET_DB_B=$(aws ec2 create-subnet \
    --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=$NET_DB_B_NAME}]" \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.12.0/24 \
    --availability-zone us-west-2b \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_DB_B" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_DB_B"  \
    --map-public-ip-on-launch

echo export NET_DB_B=$NET_DB_B
# export NET_DB_B=subnet-02fc46097e772e053

export NET_DB_C_NAME="$UNIQ-net-db-c"
export NET_DB_C=$(aws ec2 create-subnet \
    --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=$NET_DB_C_NAME}]" \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.13.0/24 \
    --availability-zone us-west-2c \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_DB_C" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_DB_C"  \
    --map-public-ip-on-launch

echo export NET_DB_C=$NET_DB_C
# export NET_DB_C=subnet-0cdbb70bbc0bc2325

export RDS_NETGRP=$UNIQ-rds-netgrp
export RDS_NAME=$UNIQ-mysql
export RDS_ROOT_USER=root
export RDS_ROOT_PASSWORD=SETECASTRONOMY
export RDS_PORT=3306
export RDS_CIDR=0.0.0.0/0
export RDS_DB=thedevconf
export RDS_CLUSTER="$UNIQ-rds-cluster"
export RDS_WRITER="$UNIQ-rds-writer"
export RDS_SECG_NAME="$UNIQ-rds-secg"
export RDS_CLASS=db.t3.small

export RDS_SECG=$(aws ec2 create-security-group \
  --group-name "$UNIQ-rds-secg" \
  --description "$UNIQ-rds-secg" \
  --vpc-id "$VPC_ID" \
  --query "GroupId" \
  --output text)

export RDS_SECG_ID=$(aws ec2 describe-security-groups \
  --filter Name=vpc-id,Values="$VPC_ID" Name=group-name,Values=${RDS_SECG_NAME} \
  --query 'SecurityGroups[*].[GroupId]' \
  --output text)

aws ec2 authorize-security-group-ingress \
  --group-id "$RDS_SECG" \
  --protocol tcp \
  --port "$RDS_PORT" \
  --cidr "$RDS_CIDR"

aws rds create-db-subnet-group \
    --db-subnet-group-name $RDS_NETGRP \
    --db-subnet-group-description "$UNIQ rds subnet group" \
    --subnet-ids $NET_DB_A $NET_DB_B $NET_DB_C

## NOT WORKING - DONE MANUALLY ##
aws rds create-db-cluster \
  --db-cluster-identifier "$RDS_CLUSTER" \
  --database-name "$RDS_DB"  \
  --engine aurora-mysql \
  --engine-version 5.7 \
  --master-username $RDS_ROOT_USER \
  --master-user-password $RDS_ROOT_PASSWORD \
  --db-subnet-group-name  $RDS_NETGRP \
  --vpc-security-group-ids $RDS_SECG \
  --backup-retention-period 3

aws rds create-db-instance \
  --engine aurora-mysql \
  --db-name $RDS_DB  \
  --db-cluster-identifier $RDS_CLUSTER \
  --db-instance-identifier $RDS_WRITER \
  --allocated-storage "25" \
  --db-instance-class "$RDS_CLASS" \
  --publicly-accessible
###

export NET_APP_A_NAME="$UNIQ-net-app-a"
export NET_APP_A=$(aws ec2 create-subnet \
    --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=$NET_APP_A_NAME}]" \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.101.0/24 \
    --availability-zone us-west-2a \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_APP_A" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_APP_A"  \
    --map-public-ip-on-launch

echo export NET_APP_A=$NET_APP_A

# export NET_APP_A=subnet-038940d1529100822

export NET_APP_B_NAME="$UNIQ-net-app-b"
export NET_APP_B=$(aws ec2 create-subnet \
    --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=$NET_APP_B_NAME}]" \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.102.0/24 \
    --availability-zone us-west-2b \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_APP_B" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_APP_B"  \
    --map-public-ip-on-launch

echo export NET_APP_B=$NET_APP_B
# export NET_APP_B=subnet-0b5a165fddba08860

export NET_APP_C_NAME="$UNIQ-net-app-c"
export NET_APP_C=$(aws ec2 create-subnet \
    --tag-specifications "ResourceType=subnet,Tags=[{Key=Name,Value=$NET_APP_C_NAME}]" \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.103.0/24 \
    --availability-zone us-west-2c \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_APP_C" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_APP_C"  \
    --map-public-ip-on-launch

# export NET_APP_C=subnet-033893e56f13e3573

export EB_BUCKET="$UNIQ-ebbucket"
export EB_ROLE="$UNIQ-ebrole"
export EB_POLICY="$UNIQ-ebpolicy"
export EB_PROFILE="$UNIQ-ebprofile"
export EB_APP="$UNIQ-tdc-api-app"
export EB_TEMPLATE="$UNIQ-tdc-api-config-template"
export EB_INSTANCE_TYPES="t3.nano"
export EB_SPOT="false"



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

#####

export EB_VERSION="$(git log -1 --pretty=%H)"
export EB_VERSION_KEY="$EB_VERSION/Dockerrun.aws.json"
export EB_CNAME=$EB_VERSION

aws s3 cp src/main/eb/Dockerrun.aws.json "s3://$EB_BUCKET/$EB_VERSION_KEY"

aws elasticbeanstalk create-application-version \
    --application-name "$EB_APP" \
    --version-label "$EB_VERSION" \
    --source-bundle S3Bucket="$EB_BUCKET",S3Key="$EB_VERSION_KEY"

aws elasticbeanstalk check-dns-availability --cname-prefix "$EB_CNAME"

echo export EB_VERSION="$EB_VERSION"
echo export EB_CNAME="$EB_CNAME"

###

export RDS_ID=tdc-devenv-instance-1
export RDS_SECG=tdc-devenv-20200814-rds-secg
export RDS_SECG_ID=sg-02c62b29da7e8eb7e
export RDS_JDBC=jdbc:mysql://tdc-devenv-instance-1.cgmx2hal1xxh.us-west-2.rds.amazonaws.com:3306/thedevconf

export DATASOURCE_URL=$RDS_JDBC
export DATASOURCE_USERNAME=thedevconf-app-user
export DATASOURCE_PASSWORD=cpu4ArEWFkg2bZPDna9Skx3Lw6AyY8PK
export DATASOURCE_KIND="mysql"
export HIBERNATE_ORM_DATABASE_GENERATION="none"

export CERTIFICATE_ARN=arn:aws:acm:us-west-2:823519934482:certificate/f8052147-3ab4-43e4-a4af-f46971a36030


export EB_VERSION=b3a999b14892020b87fb3f854c9c4f27674605f2
export EB_CNAME="$UNIQ-tdc-api-env8"
export EB_ENV="$UNIQ-tdc-api-env8"
export EB_INSTANCE_TYPES="t3.small"


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


