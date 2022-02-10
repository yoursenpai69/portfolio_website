import React from "react";
import Links from "./Components/Links";
import "./App.css";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      {/* side bar with links */}
      <Links />
      {/* Mid section with some text */}
      <Intro id="home" />
      {/* Nav bar */}
      <Navbar />
    </div>
  );
};

export default App;
