import { mysqlTable } from "drizzle-orm/mysql-core";

export const GRADES = mysqlTable('grades', {
  id: int('id').primarykey(), 
  grade: varchar('grade', {length:10}).notNull()
} )