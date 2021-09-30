import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Reduxifier from "Utilities/reduxifier";
import Registry from "Utilities/registry";
import { fetchRoutes } from "Config/routes";

const Containers = Reduxifier.bindReactRedux(Registry);
const Routes = fetchRoutes(Containers);

const Application = () => {
  const renderContent = (data) => {
    const url = ["/login", "/signup"]
    const components = [];
    if (url.includes(data.location.pathname)) {
      components.push(<Routes />);
    } else {
      components.push(
        <>
          <Containers.Header {...data} />
          <Routes />
        </>
      );
    }

    return components;
  };

  return (
    <Router history={Reduxifier.history}>
      <div className="fullHeight">
        <Route render={(data) => renderContent(data)} />
      </div>
    </Router>
  );
};

export default Application;
