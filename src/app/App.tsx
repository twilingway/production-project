import { useTheme } from "app/providers/ThemeProvider";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";

import { AppRouter } from "./providers/router";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export default App;
