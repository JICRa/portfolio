import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

import { BrowserRouter as Router } from "react-router-dom";
import Analytics from "./components/Analytics";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        {/* Router wraps everything that uses react-router */}
        <Router>
          {/* This component listens to route changes and fires GA page_view */}
          <Analytics />
          <div>
            <Main theme={chosenTheme} />
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
