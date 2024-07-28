import "./style.css";
import moon from "./moon.svg";
import sun from "./sun.svg";
import { useTheme } from "@components/Theme/ThemeContext";

function BtnThemeMode() {
  const { theme, toggleTheme } = useTheme();
  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <>
      <button
        onClick={toggleTheme}
        className={theme === "dark" ? btnActive : btnNormal}
      >
        <img src={sun} alt="sun" className="dark-mode-btn__icon" />
        <img src={moon} alt="moon" className="dark-mode-btn__icon" />
      </button>
    </>
  );
}

export default BtnThemeMode;
