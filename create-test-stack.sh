#!/usr/bin/env bash
aws s3 cp . s3://original-script/ --recursive --exclude "*" --include "*.yaml"
#aws cloudformation create-stack --stack-name $1 --template-url https://s3.us-east-2.amazonaws.com/original-script/master.yaml
aws cloudformation create-stack --stack-name $1 --template-url https://s3.us-east-2.amazonaws.com/original-script/master.yaml --capabilities CAPABILITY_NAMED_IAM