import React from "react";
import { shape } from "prop-types";
import RefProvider from "Utilities/refProvider";
import HeaderBar from "./header";

// eslint-disable-next-line no-unused-vars
let components;

const HeaderController = (props) => {
  const propShape = {
    store: props.store.homeStore,
    actions: props.actions.homeActions,
    history: props.history,
    location: props.location,
  };

  return (
    <>
      <RefProvider data={propShape}>
        <HeaderBar />
      </RefProvider>
    </>
  );
};

HeaderController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const Header = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return HeaderController;
};

export default Header;
