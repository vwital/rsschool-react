import { Component, ErrorInfo, ReactNode } from "react";
import { IErrorBoundaryProps, IErrorBoundaryState } from "./interfaces";
import config from "./config";

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({ hasError: true });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <>
          <h1>{config.title}</h1>
          <button>
            <a href="">{config.reloadButtonText}</a>
          </button>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
