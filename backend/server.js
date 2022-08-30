const dotenv = require("dotenv");
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
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
  console.log("Database Connection success");
});

app.get("/orders", (req, res) => {
  db.query("select * from orders", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).json(result);
  });
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Api is running");
  });
}

app.listen(
  port,
  console.log(`server running  in ${process.env.NODE_ENV} on port ${port}`)
);
