import "./App.css";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Register />
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
