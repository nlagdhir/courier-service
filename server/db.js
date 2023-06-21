import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: 3306,
});

// For pool initialization, see above
db.getConnection(function (err, conn) {
  if (err) throw err;
  console.log("Successfully connect to the database.");

  db.releaseConnection(conn);
});
