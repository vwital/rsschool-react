import reactLogo from "@/assets/react.svg";
import { ReactNode } from "react";
import "./loader.css";

function Loader(): ReactNode {
  return (
    <>
      <h3>Loading...</h3>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </>
  );
}

export default Loader;
