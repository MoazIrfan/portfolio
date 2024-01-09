import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';

declare global {
  // eslint-disable-next-line no-var -- only var works here
  var db: PostgresJsDatabase<typeof schema> | undefined;
  var connection: any;
}

let db: PostgresJsDatabase<typeof schema>;
let connection: ReturnType<typeof postgres>;

if (process.env.NODE_ENV === 'production') {
  connection = postgres(process.env.DATABASE_URL!);
  db = drizzle(connection, { schema });
} else {
  if (!global.db) {
    global.connection = postgres(process.env.DATABASE_URL!);
    global.db = drizzle(global.connection, { schema });
  }
  db = global.db;
  connection = global.connection;
}

export { db, connection };
