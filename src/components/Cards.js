import React, { useState } from "react";
import SearchTab from "./SearchTab";
import AllCardsTab from "./AllCardsTab";
import "./Cards.css";

export default function Card() {
  const [activeTab, setActiveTab] = useState("search"); // "search" ou "all"

  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="container">
      {/* Sistema de Abas */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === "search" ? "active" : ""}`}
          onClick={() => handleTabChange("search")}
        >
          <span role="img" aria-label="pesquisar">
            🔍
          </span>{" "}
          Pesquisar Cartas
        </button>
        <button
          className={`tab-button ${activeTab === "all" ? "active" : ""}`}
          onClick={() => handleTabChange("all")}
        >
          <span role="img" aria-label="todas">
            📋
          </span>{" "}
          Todas as Cartas
        </button>
      </div>

      {/* Renderiza o componente da aba ativa */}
      {activeTab === "search" && <SearchTab />}
      {activeTab === "all" && <AllCardsTab />}
    </div>
  );
}
