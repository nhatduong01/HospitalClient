const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
require("dotenv").config();
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "bb6ff4ceb6252a",
  password: "72e02560",
  database: "heroku_3789ff6df63142e",
});
//mysql://bb6ff4ceb6252a:72e02560@us-cdbr-east-04.cleardb.com/heroku_3789ff6df63142e?reconnect=true
app.post("/makereport", (req, res) => {
  const REPORT_IP = `SELECT StartDate, EndDate, Result, Price AS medication_price
                      FROM TREATMENT JOIN medication ON treatment.Medication = medication.Code
                      WHERE treatment.Patient = '${req.body.patientID}'`;
  const REPORT_OP = `SELECT examination.DateExam, diagnosis, fee, price AS medication_price
                      FROM examination JOIN medication ON examination.Medication = medication.Code
                      WHERE patient = '${req.body.patientID}'`;
  if (req.body.patientID[0] == "I")
    db.query(REPORT_IP, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
  else
    db.query(REPORT_OP, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
});
app.post("/searchpatientinfo", (req, res) => {
  console.log(req.body.patientID);
  const SEARCH_QUERY1 = `SELECT First_name, Last_name, DateExam, Diagnosis, Phone_Num
                          FROM Patient 
                            JOIN examination ON patient.Code = examination.Patient
                              LEFT OUTER JOIN patient_phone on patient.Code = patient_phone.Code
                          WHERE patient.Code= '${req.body.patientID}';`;
  const SEARCH_QUERY2 = `SELECT First_name, Last_name, StartDate, EndDate, Result, patient_phone.Phone_Num
                          FROM patient
                            JOIN treatment ON patient.Code = treatment.Patient
                              LEFT OUTER JOIN patient_phone ON patient.Code = patient_phone.Code
                          WHERE patient.Code = '${req.body.patientID}';`;

  if (req.body.patientID[0] == "I")
    db.query(SEARCH_QUERY2, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
  else
    db.query(SEARCH_QUERY1, (err, result) => {
      if (err) res.send(err);
      else res.send(result);
    });
});
app.post("/register", (req, res) => {
  const username = req.body.userReg;
  const password = req.body.passwordReg;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) console.log(err);
    const ADD_QUERY = `INSERT INTO userdata VALUES   ('${username}','${hash}')`;
    db.query(ADD_QUERY, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      } else res.send("Task has been added");
    });
  });
});
app.post("/addnewpatient", (req, res) => {
  const ADD_PATIENT_QUERY = `INSERT INTO patient VALUES ('${req.body.newID}', '${req.body.newFname}', '${req.body.newLname}', STR_TO_DATE('${req.body.newDOB}','%Y-%m-%d'),'${req.body.newGender}','${req.body.newAddress}')`;
  db.query(ADD_PATIENT_QUERY, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else res.send("Patient has been added");
  });
});
app.post("/listpatient", (req, res) => {
  const LIST_PATIENT = `SELECT First_Name, Last_Name, DoB, Gender
                        FROM patient
                        WHERE patient.Code IN 
                        (
                        SELECT DISTINCT out_patient.Code 
                        FROM out_patient
                        WHERE Exam_Doctor = '${req.body.doctorID}'
                        UNION
                        SELECT DISTINCT treatment.Patient
                        FROM treatment
                        WHERE treatment.Doctor = '${req.body.doctorID}'
                        );`;
  db.query(LIST_PATIENT, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});
app.post("/addOP", (req, res) => {
  var nextdate = "";
  if (req.body.nextExam == null) nextdate = "NULL";
  else nextdate = `STR_TO_DATE('${req.body.nextExam}', '%Y-%m-%d')`;
  const ADD_OP = `  INSERT INTO out_patient VALUES ('${req.body.patientID}', '${req.body.doctorID}')`;
  const ADD_OP2 = `INSERT INTO Examination VALUES ('${req.body.patientID}', '${req.body.doctorID}', '${req.body.med}', STR_TO_DATE('${req.body.DataExam}','%Y-%m-%d'),${nextdate}, ${req.body.fee},'${req.body.diagnosis}');`;
  db.query(ADD_OP);
  db.query(ADD_OP2, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else res.send("Patient has been added");
  });
});
app.post("/addIP", (req, res) => {
  var datedischarge = "";
  if (req.body.discharge == null) datedischarge = "NULL";
  else datedischarge = `STR_TO_DATE('${req.body.discharge}', '%Y-%m-%d')`;
  const ADD_IP1 = `INSERT INTO in_patient VALUES ('${req.body.patientID}', '${req.body.room}',STR_TO_DATE('${req.body.DataExam}','%Y-%m-%d'), ${datedischarge}, '${req.body.diagnosis}', ${req.body.fee}, ${req.body.nurseID});`;
  const ADD_IP2 = `INSERT INTO treatment VALUES ('${req.body.patientID}', '${req.body.DoctorID}', '${req.body.med}', STR_TO_DATE('${req.body.startdate}','%Y-%m-%d'),STR_TO_DATE('${req.body.EndDate}','%Y-%m-%d'), '${req.body.diagnosis}', '${req.body.status}' );`;
  db.query(ADD_IP1);
  db.query(ADD_IP2, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else res.send("Patient has been added");
  });
});
app.post("/login", (req, res) => {
  const username = req.body.userlog;
  const password = req.body.passwordlog;

  const SELECT_QUERY = `SELECT * FROM userdata WHERE username = '${username}'`;
  db.query(SELECT_QUERY, (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, finalresponse) => {
        if (finalresponse) res.send(result);
        else res.send({ message: "Wrong username or password!" });
      });
    } else res.send({ message: "username does not exist" });
  });
});
app.listen(process.env.PORT || 4000, () => {
  console.log("Running on port 4000");
});
