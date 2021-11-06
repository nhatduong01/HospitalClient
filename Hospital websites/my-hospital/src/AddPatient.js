import React, { useState } from "react";
import axios from "axios";
import "./AddPatient.css";
import "./lib/bootstrap/bootstrap.min.css";
function AddPatient() {
  const [patientID, setpatientID] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [result, setresult] = useState("");
  const AddPatientIN = (e) => {
    e.preventDefault();
    console.log("addpatient");
    axios
      .post("http://localhost:4000/addnewpatient", {
        newID: patientID,
        newFname: FName,
        newLname: LName,
        newDOB: DOB,
        newGender: Gender,
        newAddress: Address,
      })
      .then((Response) => {
        setresult(Response.data);
        console.log(result);
      });
  };
  return (
    <div className="AddPatientPage">
      <h1>Please input the patient</h1>
      <form class="PatientForm">
        <label htmlFor="name">Patient ID</label>
        <input
          name="ID"
          placeholder="11 characters, start with OP or IP"
          type="text"
          onChange={(e) => {
            setpatientID(e.target.value);
          }}
          required
        />
        <label htmlFor="name">First Name</label>
        <input
          name="name"
          placeholder="Enter first name"
          type="text"
          onChange={(e) => {
            setFName(e.target.value);
          }}
          required
        />
        <label htmlFor="name">Last Name</label>
        <input
          name="name"
          placeholder="Enter first name"
          type="text"
          onChange={(e) => {
            setLName(e.target.value);
          }}
          required
        />
        <label htmlFor="day">Date of Birth</label>
        <input
          type="date"
          onChange={(e) => {
            setDOB(e.target.value);
          }}
          required
        ></input>
        <label>Gender</label>
        <input
          placeholder="M or F"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          required
        ></input>
         <label className="Addressinput"> Address</label>
        <input
          placeholder="Please enter address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
        ></input>
        <button type="submit" onClick={AddPatientIN} className="submitbutton">
          Add
        </button>
      </form>
      <a href="./homepage" class="btn btn-secondary text-white">
        Turn back
      </a>
    </div>
  );
}

export default AddPatient;
