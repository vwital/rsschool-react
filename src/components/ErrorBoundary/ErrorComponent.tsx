import { Component, ReactNode } from "react";
import { IErrorBoundaryState } from "./interfaces";
import config from "./config";

class ErrorComponent extends Component<object, IErrorBoundaryState> {
  constructor(props: object) {
    super(props);
    this.state = { shouldThrowError: false };
  }

  throwError = () => {
    this.setState({ shouldThrowError: true });
  };

  render(): ReactNode {
    if (this.state.shouldThrowError) {
      throw new Error("This is the error");
    }

    return (
      <div>
        <button className="error-button " onClick={this.throwError}>
          {config.errorButtonText}
        </button>
      </div>
    );
  }
}

export default ErrorComponent;
