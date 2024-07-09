import { drizzle } from "drizzle-orm/planetscale-serverless";
import { Client } from "@planetscale/database";

const client = new Client({
  host: process.env["srv1562.hstgr.io"],
  username: process.env["u268239541_attendancetrak"],
  database: process.env["u268239541_attendancetrak"],
  password: process.env["DATABASE_PASSWORD"],
  port: process.env["3306"],
});

const db = drizzle(client);
