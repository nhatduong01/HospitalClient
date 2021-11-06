// import React, { useState } from "react";
// import "./SearchPatient.css";
// import axios from "axios";
// function SearchPatient() {
//   const [ID, setID] = useState("");
//   const [result, setresult] = useState([]);
//   const searchpatientinfo = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:4000/searchpatientinfo", {
//         patientID: ID,
//       })
//       .then((Response) => {
//         console.log(Response);
//         setresult(Response.data);
//       });
//   };
//   return (
//     <div className="SearchBar">
//       <form>
//         <label>
//           <span>Enter patient ID</span>
//         </label>
//         <input
//           type="text"
//           placeholder="PatientID"
//           required
//           onChange={(e) => {
//             setID(e.target.value);
//           }}
//         ></input>
//         <button type="submit" onClick={searchpatientinfo}>
//           Search
//         </button>
//         <button>Go back</button>
//       </form>
//     </div>
//   );
// }

// export default SearchPatient;
import React, { useState, useEffect } from "react";
import "./SearchPatient.css";
import axios from "axios";
import { Link } from "react-router-dom";
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
                <thead>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Result</th>
                    <th>Date of birth</th>
                  </tr>
                </thead>
                <tbody>
                  <td text="firstname">{resultpatient[0]?.First_name}</td>
                  <td text="lastname">{resultpatient[0]?.LAst_name}</td>
                  <td text="gender">Male</td>
                  <td text="DoB">11/12/2008</td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPatient;
