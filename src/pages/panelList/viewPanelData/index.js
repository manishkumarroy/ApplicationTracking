import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";

import View from "./viewData";

// eslint-disable-next-line no-unused-vars
let components;

const ViewController = (props) => {
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
            <View />
          </div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

ViewController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const ViewPanel = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return ViewController;
};

export default ViewPanel;
