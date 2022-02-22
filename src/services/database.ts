import { Pool, ClientConfig, types } from 'pg';
import fs from 'fs';
import path from 'path';

const TYPE_TIMESTAMPTZ = 1184

// do not parse into js date object
types.setTypeParser(TYPE_TIMESTAMPTZ, v => v);

const config: ClientConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD || '',
  port: (process.env.PGPORT || 5432) as number,
}

if (process.env.NODE_ENV !== 'development') {
  config.ssl = {
    rejectUnauthorized: false,
    ca: getCert()
  };
}

const pool = new Pool(config);

export function getCert(): string {
  const root = process.env.GITHUB_WORKSPACE || process.cwd();
  return fs.readFileSync(
    path.join(root, './global-bundle.pem')
  ).toString();
}

export default pool;
