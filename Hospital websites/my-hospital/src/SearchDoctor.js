import React, { useState } from "react";
import axios from "axios";
import "./SearchPatient.css";
function ListPatient() {
  const [ID, setID] = useState("");
  const ListPatient = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/listpatient", {
        doctorID: ID,
      })
      .then((Response) => {
        console.log(Response);
      });
  };
  return (
    <div className="SearchBar">
      <form>
        <label>
          <span>Enter Doctor ID</span>
        </label>
        <input
          type="text"
          placeholder="DoctorID"
          required
          onChange={(e) => {
            setID(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={ListPatient}>
          Search
        </button>
      </form>
    </div>
  );
}

export default ListPatient;
