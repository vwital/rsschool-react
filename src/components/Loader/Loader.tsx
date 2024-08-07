import reactLogo from "./../../../public/react.svg";
import "./style.module.css";

function Loader() {
  return (
    <>
      <h3>Loading...</h3>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </>
  );
}

export default Loader;
