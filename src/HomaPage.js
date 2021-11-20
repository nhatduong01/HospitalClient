import React from "react";
import { useHistory } from "react-router";
import "./HomePage.css";
import "./lib/bootstrap/bootstrap.min.css";
function HomaPage() {
  const history = useHistory();
  return (
    <div className="HomePage">
      <div className="Navigate">
        <h1>Choose a function</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Log out
        </button>
      </div>
      <div className="fourbuttons">
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/addpatient");
          }}
        >
          Add a patient
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/searchpatient");
          }}
        >
          Search patient
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/listpatient");
          }}
        >
          List Patients
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            history.push("/makereport");
          }}
        >
          Make a report
        </button>
      </div>
    </div>
  );
}

export default HomaPage;
