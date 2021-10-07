import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";

import Openings from "./opening";

// eslint-disable-next-line no-unused-vars
let components;

const OpeningController = (props) => {
  const propShape = {
    store: props.store.openingsStore,
    actions: props.actions.openingsActions,
    history: props.history,
    location: props.location,
  };

  useEffect(() => {
    propShape.actions.resetStore();
  }, []);

  return (
    <>
      <RefProvider data={propShape}>
        <RefErrorBoundary {...props}>
          <div className="fullHeight">
            <Openings />
          </div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

OpeningController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const Opening = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return OpeningController;
};

export default Opening;
