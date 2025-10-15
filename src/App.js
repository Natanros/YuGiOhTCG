import React from "react";
import Cards from "../src/components/Cards.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Símbolos Místicos de Fundo */}
      <div className="mystical-symbols"></div>

      {/* Millennium Items adicionais */}
      <div className="millennium-ring top-left">⊕</div>
      <div className="millennium-eye top-right">◉</div>
      <div className="millennium-key bottom-left">⚷</div>
      <div className="dark-magician-symbol">◆</div>

      <header className="App-header">
        <h1 id="title">
          Yu-Gi-Oh Cards{" "}
          <span role="img" aria-label="lightning">
            ⚡
          </span>
        </h1>
        <Cards />
      </header>
    </div>
  );
}

export default App;
