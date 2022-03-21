import React from "react";
import "./App.css";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { Button } from "@progress/kendo-react-buttons";
import { Switch } from "@progress/kendo-react-inputs";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    switcher({ theme: isDarkMode ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  return (
    <div className="main fade-in k-body">
      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkMode} onChange={toggleTheme} />

      <Button
        style={{ width: 300, marginTop: 30 }}
        themeColor="primary">
          Primary Button
      </Button>
    </div>
  );
}

export default App;
