import reactLogo from "./../../../public/react.svg";
import Image from "next/image";
import styles from "./style.module.css";

const logoStyle = `${styles.logo} ${styles.react}`;

function Loader() {
  return (
    <>
      <h3>Loading...</h3>
      <Image
        width={300}
        height={300}
        src={reactLogo}
        className={logoStyle}
        alt="React logo"
      />
    </>
  );
}

export default Loader;
