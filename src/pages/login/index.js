import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";

import LoginForm from "./login";

// eslint-disable-next-line no-unused-vars
let components;

const LoginController = (props) => {
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
            <LoginForm />
          </div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

LoginController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const Login = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return LoginController;
};

export default Login;
