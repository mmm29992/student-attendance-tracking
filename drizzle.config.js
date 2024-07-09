import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "mysql",
  dbCredentials: {
    host: process.env["srv1562.hstgr.io"],
    username: process.env["u268239541_attendancetrak"],
    database: process.env["u268239541_attendancetrak"],
    password: process.env["DATABASE_PASSWORD"],
    port: process.env["3306"],
  },
  verbose: true,
  strict: true,
});
