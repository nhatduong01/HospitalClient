const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hospital",
});
app.post("/register", (req, res) => {
  const username = req.body.userReg;
  const password = req.body.passwordReg;
  const ADD_QUERY = `INSERT INTO hospital.userdata VALUES   ('${username}','${password}')`;
  db.query(ADD_QUERY, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else res.send("Task has been added");
  });
});
app.post("/login", (req, res) => {});
app.listen(4000, () => {
  console.log("Running on port 4000");
});
