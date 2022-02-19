import React from "react";
import Links from "./Components/Links";
import "./App.css";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import { BreakpointProvider } from "react-socks";

const App = () => {
  return (
    <BreakpointProvider>
      <div className="App">
        {/* side bar with links */}

        <Links className="links-main" />
        {/* Mid section with some text */}
        <Intro id="home" className="intro-main" />
        {/* Nav bar */}
        <Navbar className="nav-main" />
      </div>
    </BreakpointProvider>
  );
};

export default App;
