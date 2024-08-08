import styles from "./style.module.css";
import Image from "next/image";
import moon from "./moon.svg";
import sun from "./sun.svg";
import { useTheme } from "@components/Theme/ThemeContext";

function BtnThemeMode() {
  const { theme, toggleTheme } = useTheme();
  const btnNormal = styles["dark-mode-btn"];
  const btnActive = `${styles["dark-mode-btn"]} ${styles["dark-mode-btn--active"]}`;

  return (
    <>
      <button
        onClick={toggleTheme}
        className={theme === "dark" ? btnActive : btnNormal}
      >
        <Image src={sun} alt="sun" className={styles["dark-mode-btn__icon"]} />
        <Image
          src={moon}
          alt="moon"
          className={styles["dark-mode-btn__icon"]}
        />
      </button>
    </>
  );
}

export default BtnThemeMode;
