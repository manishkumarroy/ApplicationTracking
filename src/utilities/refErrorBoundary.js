import React, { Component } from "react";
import { node, string, func, shape } from "prop-types";
import { Result } from "antd";

export default class RefErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
      stack: "",
    };
    this.resetError = this.resetError.bind(this);
  }

  componentDidCatch(stackTrace) {
    const { location, errorBoundaryID, onError } = this.props;
    onError(location.pathname, errorBoundaryID, stackTrace);
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error.message,
      stack: error.stack,
    };
  }

  resetError() {
    const { location, errorBoundaryID, onReload } = this.props;
    onReload(location.pathname, errorBoundaryID);
    this.setState({
      hasError: false,
      errorMessage: "",
      stack: "",
    });
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { errorMessage, stack, hasError } = this.state;
    // const { location, errorBoundaryID } = this.props;

    if (hasError) {
      return <Result status="warning" title="Oops, Something went wrong!" />;
    }
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

RefErrorBoundary.propTypes = {
  children: node.isRequired,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
  errorBoundaryID: string,
  onError: func,
  onReload: func,
};

RefErrorBoundary.defaultProps = {
  errorBoundaryID: undefined,
  onError: function noop() {},
  onReload: function noop() {},
};
