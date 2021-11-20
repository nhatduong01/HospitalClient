import React, { useState } from "react";
import axios from "axios";
import "./AddOP.css";
import { useLocation } from "react-router-dom";
function AddOP() {
  const [doctorID, setdoctorID] = useState("");
  const [medication, setmedication] = useState("");
  const [DateExam, setDateExam] = useState(Date(null));
  const [nextExam, setnextExam] = useState(null);
  const [fee, setfee] = useState(0);
  const [diagnosis, setdiagnosis] = useState("");
  const [result, setresult] = useState("");
  const location = useLocation();
  const addOP = (e) => {
    e.preventDefault();
    axios
      .post("https://hospital-management-cc05.herokuapp.com/addOP", {
        patientID: location.state.ID,
        doctorID: doctorID,
        med: medication,
        DataExam: DateExam,
        nextExam: nextExam,
        fee: fee,
        diagnosis: diagnosis,
      })
      .then((Response) => {
        console.log(Response);
        alert("Added successfully");
        setresult(Response.data);
        console.log(result);
      })
      .catch((error) => {
        alert("Added failed!!! Please check again "); //Logs a string: Error: Request failed with status code 404
      });
  };

  return (
    <div className="AddPatientPage">
      <h1>Please enter the information of Out Patient</h1>
      <form class="PatientForm" onSubmit={addOP}>
        <label htmlFor="name">Examing doctor ID</label>
        <input
          name="ID"
          placeholder="Doctor ID"
          type="text"
          onChange={(e) => {
            setdoctorID(e.target.value);
          }}
          required
        />
        <label htmlFor="med">Medication Code</label>
        <input
          name="name"
          placeholder="Medication Code"
          type="text"
          onChange={(e) => {
            setmedication(e.target.value);
          }}
          required
        />
        <label htmlFor="day">Date Examination</label>
        <input
          type="date"
          onChange={(e) => {
            setDateExam(e.target.value);
          }}
          required
        ></input>
        <label htmlFor="day">Next Examination</label>
        <input
          type="date"
          onChange={(e) => {
            setnextExam(e.target.value);
          }}
        ></input>
        <label>Fee</label>
        <input
          placeholder="Enter the fee"
          onChange={(e) => {
            setfee(e.target.value);
          }}
          type="number"
          required
        ></input>
         <label className="Addressinput"> Diagnosis</label>
        <input
          placeholder="Please enter Diagnosis"
          onChange={(e) => {
            setdiagnosis(e.target.value);
          }}
          required
        ></input>
        <button type="submit" className="submitbutton">
          Add
        </button>
      </form>
      <a href="./homepage" class="btn btn-secondary text-white">
        Turn back
      </a>
    </div>
  );
}

export default AddOP;
