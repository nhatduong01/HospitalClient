import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
import HomaPage from "./HomaPage";
import AddPatient from "./AddPatient";
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
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
