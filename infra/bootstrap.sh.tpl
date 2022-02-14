#! /bin/bash

yum update -y
sudo yum install postgresql-server -y
sudo yum install jq -y

export AWS_DEFAULT_REGION=us-east-1
export PGHOST=${db_host}
export PGPASSWORD="$(aws ssm get-parameter --name "${ssm_db_param_path}" --with-decryption | jq .Parameter.Value | xargs echo)"
export PGUSER=${db_username}
export PGDATABASE=${db_name}

aws s3 cp s3://${s3_bucket}/ . --recursive

for f in *.sql
do
  psql -p 5432 -a -w -f "$f"
done
