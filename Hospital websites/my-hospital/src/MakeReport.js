import React, { useState } from "react";
import axios from "axios";
import "./MakeReport.css";
function MakeReport() {
  const [ID, setID] = useState("");
  const report = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/makereport", {
        patientID: ID,
      })
      .then((Response) => {
        console.log(Response);
      });
  };
  return (
    <div className="SearchBar">
      <form>
        <label>
          <span>Enter patient ID</span>
        </label>
        <input
          type="text"
          placeholder="PatientID"
          required
          onChange={(e) => {
            setID(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={report}>
          Search
        </button>
      </form>
    </div>
  );
}

export default MakeReport;
