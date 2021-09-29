import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";

// eslint-disable-next-line no-unused-vars
let components;

const DashboardController = (props) => {
  const propShape = {
    store: props.store.homeStore,
    actions: props.actions.homeActions,
    history: props.history,
    location: props.location,
  };

  useEffect(() => {
    return () => {
      propShape.actions.resetStore();
    };
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <div className="fullHeight">
            <h1>Home</h1>
          </div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

DashboardController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const Dashboard = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return DashboardController;
};

export default Dashboard;
