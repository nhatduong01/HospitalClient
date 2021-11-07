import React, { useState } from "react";
import axios from "axios";
import "./SearchPatient.css";
import "./lib/bootstrap/bootstrap.min.css";
function ListPatient() {
  const [resultpatient, setresultpatient] = useState([]);
  const [ID, setID] = useState("");
  const ListPatient = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/listpatient", {
        doctorID: ID,
      })
      .then((Response) => {
        setresultpatient(Response.data);
        console.log(Response.data);
      });
  };
  const RenderTable = (result, ID) => {
    return (
      <tbody>
        <td>{result?.First_Name}</td>
        <td>{result?.Last_Name}</td>
        <td>{result?.Gender}</td>
        <td>{result?.DoB}</td>
      </tbody>
    );
  };

  return (
    <div>
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
          <button
            className="btn btn-primary"
            type="submit"
            onClick={ListPatient}
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
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Gender</th>
                    <th>Day of birth</th>
                  </tr>
                </thead>

                {resultpatient.map((result) => RenderTable(result, ID))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListPatient;
