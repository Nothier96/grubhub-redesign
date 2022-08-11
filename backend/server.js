const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 5000 || process.env.PORT;

const db = mysql.createConnection({
  host: "grubhub.cmud03uwyloi.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "password",
  database: "grubhub",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Database Connection Success");
});

app.get("/orders", (req, res) => {
  db.query("select * from orders", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});

app.listen(port, console.log(`server running on port ${port}`));
