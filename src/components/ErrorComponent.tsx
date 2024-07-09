import { Component, ReactNode } from "react";

interface IState {
  shouldThrowError: boolean;
}

class ErrorComponent extends Component<object, IState> {
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
          Throw an error
        </button>
      </div>
    );
  }
}

export default ErrorComponent;
