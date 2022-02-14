# AWS Technical series (Setting up bastion host and database)

Part 3 of the [AWS Aurora Technical Series](https://www.jerrychang.ca/writing/aws-aurora-technical-series).

To see the module, please visit [AWS Aurora Technical Series Part III - PostgreSQL data modelling](https://www.jerrychang.ca/writing/aws-aurora-technical-series-postgresql-data-modelling)

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
