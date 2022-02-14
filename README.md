# AWS Technical series (Setting up bastion host and database)

Part 2 of the [AWS Aurora Technical Series](https://www.jerrychang.ca/writing/aws-aurora-technical-series#5-aws-aurora---integration-with-aws-ecs).

To see the module, please visit [AWS Aurora Technical Series Part II - AWS Aurora & VPC](https://www.jerrychang.ca/writing/aws-aurora-technical-series-bastion-host)

## Getting started

1. Start local PostgreSQL

```sh
docker-compose up
```

**Note:** To re-reun with new changes (configuration, sql migrations), run - 

```
docker-compose up --build --force-recreate -V
```

`-V` - Forces volume remount

2. Add local PostgreSQL credentials to `.env.local`

**.env.local:**

```
DB_USERNAME=user
DB_HOST=0.0.0.0
DB_PASSWORD=test123
DB_PORT=5438
```

3. Start next.js local

```sh
yarn dev
```
