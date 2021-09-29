import React from "react";
import { Switch, Route } from "react-router-dom";
// import AuthRoute from "./authRoute";
import { Result } from "antd";


const fetchRoutes = (containers) => {
  const {
    Dashboard,
    PanelList,
    // Jobs,
    ContactUS,
    // Jobdescription,
    // Apply,
    ViewPanel,
    Login,
    // Notfound,
  } = containers;

  return function Routes() {
    return (
      <Switch>
        {/* Home */}
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/panelist" component={PanelList} />
        {/* <Route exact path="/jobs" component={Jobs} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/contactus" component={ContactUS} />
        <Route exact path="/view/:id" component={ViewPanel} />
        {/* <Route exact path="/description" component={Jobdescription} />
        <Route exact path="/apply" component={Apply} /> */}

        {/* Router No Match - 404 */}
        {/* <Route component={Notfound} /> */}
        {/* <Route path="*" component={Notfound} /> */}
        <Route path="*">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
          />
        </Route>
      </Switch>
    );
  };
};

export { fetchRoutes };
