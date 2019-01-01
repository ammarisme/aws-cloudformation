aws s3 cp . s3://original-script/ --recursive --exclude "*" --include "*.yaml"
aws cloudformation update-stack --stack-name test1 --template-url https://s3.us-east-2.amazonaws.com/original-script/master.yaml

