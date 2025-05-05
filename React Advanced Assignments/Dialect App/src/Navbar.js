import { languageContext } from "./languageContext";
import { useContext } from "react";
import { themeContext } from "./themeContext";
export const Navbar = () => {
  // get theme and lanauge contexts here
  const { theme, setTheme } = useContext(themeContext);
  const { language, setLanguage } = useContext(languageContext);
  function handleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={handleTheme}>
          {theme == "light" ? "light theme" : "Dark theme"}
        </button>
        <span>
          {/* Show active language here */}
          {language}
        </span>
      </div>
    </div>
  );
};
