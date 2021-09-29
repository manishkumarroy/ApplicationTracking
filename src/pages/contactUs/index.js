import React, { useEffect } from "react";
import { shape } from "prop-types";

import RefProvider from "Utilities/refProvider";
import RefErrorBoundary from "Utilities/refErrorBoundary";

import ContactUs from "./contactUs";

let components;

const ContactUsController = (props) => {
  console.log(props);
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
            <ContactUs />
          </div>
        </RefErrorBoundary>
      </RefProvider>
    </>
  );
};

ContactUsController.propTypes = {
  store: shape({}).isRequired,
  actions: shape({}).isRequired,
  location: shape({}).isRequired,
  history: shape({}).isRequired,
};

const ContactUS = (dependencies) => {
  // eslint-disable-next-line no-unused-vars
  components = dependencies;
  return ContactUsController;
};

export default ContactUS;
