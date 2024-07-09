import reactLogo from "./../assets/react.svg";
import { Component, ReactNode } from "react";
import "./../App.css";

class Loader extends Component {
  render(): ReactNode {
    return (
      <>
        <h3>Loading...</h3>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </>
    );
  }
}

export default Loader;
