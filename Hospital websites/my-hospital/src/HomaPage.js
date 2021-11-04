import React from "react";
import { useHistory } from "react-router";
import "./HomePage.css";
function HomaPage() {
  const history = useHistory();
  return (
    <div className="HomePage">
      <h1>Choose a Patient</h1>
      <div className="fourbuttons">
        <button
          onClick={() => {
            history.push("/addpatient");
          }}
        >
          Add a patient
        </button>
        <button>Search patient</button>
        <button>List Patients</button>
        <button>Make a report</button>
      </div>
    </div>
  );
}

export default HomaPage;
