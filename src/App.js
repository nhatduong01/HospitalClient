import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
import HomaPage from "./HomaPage";
import AddPatient from "./AddPatient";
import SearchPatient from "./SearchPatient";
import ListPatient from "./SearchDoctor";
import MakeReport from "./MakeReport";
import AddOP from "./AddOP";
import AddIP from "./AddIP";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/homepage">
            <HomaPage />
          </Route>
          <Route path="/addpatient">
            <AddPatient />
          </Route>
          <Route path="/searchpatient">
            <SearchPatient />
          </Route>
          <Route path="/makereport">
            <MakeReport />
          </Route>
          <Route path="/listpatient">
            <ListPatient />
          </Route>
          <Route path="/addOP">
            <AddOP />
          </Route>
          <Route path="/addIP">
            <AddIP />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
