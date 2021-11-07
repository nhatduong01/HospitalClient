import React, { useState } from "react";
import axios from "axios";
import "./AddPatient.css";
import "./lib/bootstrap/bootstrap.min.css";
import { useHistory } from "react-router";
function AddPatient() {
  const [patientID, setpatientID] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Gender, setGender] = useState("");
  const [Address, setAddress] = useState("");
  const [result, setresult] = useState("");
  const history = useHistory();
  const AddPatientIN = (e) => {
    e.preventDefault();
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
        console.log(Response);
        alert("Added successfully");
        setresult(Response.data);
        console.log(result);
        if (patientID[0] == "I") history.push("/addIP");
        else if (patientID[0] == "O") {
          history.push("/addOP");
        }
      })
      .catch((error) => {
        alert("Added failed!!! Please check again "); //Logs a string: Error: Request failed with status code 404
      });
  };
  return (
    <div className="AddPatientPage1">
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
