import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import "./AddIP.css";
function AddIP() {
  const [nurseID, setnurseID] = useState("");
  const [room, setroom] = useState("");
  const [medication, setmedication] = useState("");
  const [DateExam, setDateExam] = useState(Date(null));
  const [discharge, setdischarge] = useState(null);
  const [fee, setfee] = useState(0);
  const [diagnosis, setdiagnosis] = useState("");
  const [result, setresult] = useState("");
  const [status, setstatus] = useState("");
  const [Doctor, setDoctor] = useState("");
  const [StartDate, setStartDate] = useState(Date(null));
  const [EndDate, setEndDate] = useState(Date(null));
  const location = useLocation();
  const addOP = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/addIP", {
        patientID: location.state.ID,
        nurseID: nurseID,
        DoctorID: Doctor,
        med: medication,
        DataExam: DateExam,
        discharge: discharge,
        fee: fee,
        diagnosis: diagnosis,
        status: status,
        startdate: StartDate,
        EndDate: EndDate,
        room: room,
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
      <h1>Please enter the information of In Patient</h1>
      <form class="PatientForm" onSubmit={addOP}>
        <label htmlFor="name">SickRoom</label>
        <input
          name="ID"
          placeholder="Enter sickroom"
          type="text"
          onChange={(e) => {
            setroom(e.target.value);
          }}
          required
        />
        <label htmlFor="name">Status</label>
        <input
          name="ID"
          placeholder="Status"
          type="text"
          onChange={(e) => {
            setstatus(e.target.value);
          }}
          required
        />
        <label htmlFor="name">Nurse ID</label>
        <input
          name="ID"
          placeholder="Enter nurse ID"
          type="text"
          onChange={(e) => {
            setnurseID(e.target.value);
          }}
          required
        />
        <label htmlFor="name">Treatment doctor ID</label>
        <input
          name="ID"
          placeholder="Doctor ID"
          type="text"
          onChange={(e) => {
            setDoctor(e.target.value);
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
        <label htmlFor="day">Date Admission</label>
        <input
          type="date"
          onChange={(e) => {
            setDateExam(e.target.value);
          }}
          required
        ></input>
        <label htmlFor="day">Discharge Date</label>
        <input
          type="date"
          onChange={(e) => {
            setdischarge(e.target.value);
          }}
        ></input>
        <label htmlFor="day">Start Date</label>
        <input
          type="date"
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
          required
        ></input>
        <label htmlFor="day">End Date</label>
        <input
          type="date"
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
          required
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

export default AddIP;
