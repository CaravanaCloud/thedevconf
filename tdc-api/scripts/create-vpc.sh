#!/bin/bash
set -e

export VPC_ID=$(aws ec2 create-vpc \
    --cidr-block 10.0.0.0/16 \
    --query "Vpc.VpcId" \
    --output text)

aws ec2 create-tags --resources "$VPC_ID" \
    --tags Key=Name,Value="vpc-$UNIQ"

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

export NET_A=$(aws ec2 create-subnet \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.200.0/24 \
    --availability-zone us-west-2a \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_A" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_A"  \
    --map-public-ip-on-launch

export NET_B=$(aws ec2 create-subnet \
    --vpc-id "$VPC_ID" \
    --cidr-block 10.0.201.0/24 \
    --availability-zone us-west-2b \
    --query "Subnet.SubnetId" \
    --output text)

aws ec2 associate-route-table \
    --subnet-id "$NET_B" \
     --route-table-id "$RTB_ID"

aws ec2 modify-subnet-attribute  \
    --subnet-id "$NET_B"  \
    --map-public-ip-on-launch

export VPC_ID="$VPC_ID"
export IGW_ID="$IGW_ID"
export RTB_ID="$RTB_ID"
export NET_A="$NET_A"
export NET_B="$NET_B"