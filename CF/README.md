## Deploy using AWS Cli

    aws --profile {YOUR_PROFILE} --region {YOUR_REGION} cloudformation deploy --template-file ./cf/lambda01.yml --stack-name {YOUR_CLOUDFORMATION_STACK_NAME} --parameter-overrides EnvName={SOME_VALUE_HERE} --capabilities CAPABILITY_NAMED_IAM

** Replace values with curly braces according to the requirements