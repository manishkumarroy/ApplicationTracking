import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";

import PanelListPage from "./panelList";

// eslint-disable-next-line no-unused-vars
let components;

const PanelListController = (props) => {
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
            <PanelListPage />
          </div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

PanelListController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const PanelList = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return PanelListController;
};

export default PanelList;
