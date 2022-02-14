import "./index.css";
import "./App.css";
import React from "react";

import Title from "./components/Title/Title.tsx";
import Info from "./components/Info/Info.tsx";
import Leaderboard from "./components/Leaderboard/Leaderboard.tsx";
const App = () => {
  return (
    <div className="container">
      <Title />
      <Info />
      <Leaderboard />
    </div>
  );
};

export default App;
