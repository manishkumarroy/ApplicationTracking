import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";

import SignUpForm from "./signUp";

// eslint-disable-next-line no-unused-vars
let components;

const SignUpController = (props) => {
  const propShape = {
    store: props.store.authStore,
    actions: props.actions.authActions,
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
            <SignUpForm />
          </div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

SignUpController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const SignUp = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return SignUpController;
};

export default SignUp;
