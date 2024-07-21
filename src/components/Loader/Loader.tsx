import reactLogo from "@/assets/react.svg";
import "./loader.css";

function Loader() {
  return (
    <>
      <h3>Loading...</h3>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </>
  );
}

export default Loader;
