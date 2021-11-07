import React, { useState, useEffect } from "react";
import "./SearchPatient.css";
import axios from "axios";
import "./lib/bootstrap/bootstrap.min.css";
var patient = [];
function SearchPatient() {
  const [resultpatient, setresultpatient] = useState([]);

  const [ID, setID] = useState("");
  const searchpatientinfo = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/searchpatientinfo", {
        patientID: ID,
      })
      .then((Response) => {
        setresultpatient(Response.data);
        console.log(Response.data);
      });
  };
  const RenderTable = (result, ID) => {
    if (ID[0] == "I") {
      return (
        <tbody>
          <td>{result?.First_name}</td>
          <td>{result?.LAst_name}</td>
          <td>{result?.Result}</td>
          <td>{result?.StartDate}</td>
          <td>{result?.EndDate}</td>
          <td>{result?.patient_phone}</td>
        </tbody>
      );
    } else {
      return (
        <tbody>
          <td>{result?.First_name}</td>
          <td>{result?.LAst_name}</td>
          <td>{result?.diagnosis}</td>
          <td>{result?.DateExam}</td>
          <td>{result?.patient_phone}</td>
        </tbody>
      );
    }
  };
  const renderheader = () => {
    if (ID[0] == "I") {
      return (
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Result</th>
          <th>StartDate</th>
          <th>EndDate</th>
          <th>Phone Number</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Diagnosis</th>
          <th>Date Examination</th>
          <th>Phone Number</th>
        </tr>
      );
    }
  };
  return (
    <div>
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
          <button
            className="btn btn-primary"
            type="submit"
            onClick={searchpatientinfo}
          >
            Search
          </button>
        </form>
        <a href="./homepage" className="btn btn-secondary text-white">
          Turn back
        </a>
      </div>
      <div className="col-sm-12">
        <div className="card  -3">
          <div className="card-header px-0 pb-2">
            <h2 className="text-uppercase text-center">List patients</h2>
            <a href="./addpatient" className="btn btn-sm btn-primary">
              Add
            </a>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>{renderheader()}</thead>
                {resultpatient.map((result) => RenderTable(result, ID))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPatient;
