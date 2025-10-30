import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  database: "Users",
  host: "localhost",
  port: 5432,
  password: "1234",
});
