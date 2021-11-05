import React, { useState } from "react";
import "./SearchPatient.css";
import axios from "axios";
function SearchPatient() {
  const [ID, setID] = useState("");
  const searchpatientinfo = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/searchpatientinfo", {
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
        <button type="submit" onClick={searchpatientinfo}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchPatient;
