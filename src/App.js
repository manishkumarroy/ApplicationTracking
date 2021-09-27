import React from "react";
import Navbar from "./component/layout/Navbar";
import ContactUs from "./component/pages/ContactUs";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dashboard from "./component/pages/Dashboard";
import Jobs from "./component/pages/Jobs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from "./component/pages/Notfound";
//import Login from "./component/pages/Login";
import Jobdescription from "./component/pages/jobs/Jobdescription";
import Apply from "./component/pages/jobs/Apply";
import View from "./component/pages/panelist/View";
import Panelist from "./component/pages/Panelist";
import Login from "./component/pages/Login"; 

function App() {

  console.log(window.location);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/panelist" component={Panelist} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/description" component={Jobdescription} />
          <Route exact path="/apply" component={Apply} />
          <Route exact path="/view/:id" component={View} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
