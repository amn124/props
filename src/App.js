import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App" style={{ background: "#f0f0f0", padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "36px", color: "#333" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;

