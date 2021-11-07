import React, { useState } from "react";
import axios from "axios";
import "./MakeReport.css";
import "./lib/bootstrap/bootstrap.min.css";
function MakeReport() {
  const [ID, setID] = useState("");
  const [resultpatient, setresultpatient] = useState([]);
  const report = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/makereport", {
        patientID: ID,
      })
      .then((Response) => {
        console.log(Response);
        setresultpatient(Response.data);
      });
  };
  const RenderTable = (result, ID) => {
    if (ID[0] == "I") {
      return (
        <tbody>
          <td>{result?.StartDate}</td>
          <td>{result?.EndDate}</td>
          <td>{result?.Result}</td>
          <td>{result?.medication_price}</td>
        </tbody>
      );
    } else {
      return (
        <tbody>
          <td>{result?.DateExam}</td>
          <td>{result?.diagnosis}</td>
          <td>{result?.fee}</td>
          <td>{result?.medication_price}</td>
        </tbody>
      );
    }
  };
  const renderheader = () => {
    if (ID[0] == "I") {
      return (
        <tr>
          <th>StartDate</th>
          <th>EndDate</th>
          <th>Result</th>
          <th>Medication Price</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th>Date Examination</th>
          <th>Diagnosis</th>
          <th>Fee</th>
          <th>Medication Price</th>
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
          <button className="btn btn-primary" type="submit" onClick={report}>
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

export default MakeReport;
