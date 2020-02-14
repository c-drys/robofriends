import React, { component, Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.state({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <hi>Oooops. That is not good</hi>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
