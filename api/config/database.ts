import app from "@adonisjs/core/services/app";
import { defineConfig } from "@adonisjs/lucid";
import env from "#start/env";

const dbConfig = defineConfig({
  connection: env.get("DB_CONNECTION", "sqlite"),
  connections: {
    pg: {
      client: "pg",
      connection: {
        host: env.get("PG_HOST"),
        port: Number(env.get("PG_PORT", "5432")),
        user: env.get("PG_USER"),
        password: env.get("PG_PASSWORD", ""),
        database: env.get("PG_DB_NAME"),
      },
      migrations: {
        naturalSort: true,
        paths: ["database/migrations"],
      },
      debug: Boolean(env.get("SQL_DEBUG")),
    },
    sqlite: {
      client: "better-sqlite3",
      connection: {
        filename: app.tmpPath("db.sqlite3"),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ["database/migrations"],
      },
    },
  },
});

export default dbConfig;
