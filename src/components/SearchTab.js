import React, { useState } from "react";
import api from "../api.js";
import CardItem from "./CardItem";
import CardModal from "./CardModal";

export default function SearchTab() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  async function searchCards(e) {
    e.preventDefault();

    if (!searchTerm.trim()) {
      setError("Digite algo para pesquisar");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Busca cartas que contenham o termo digitado
      const response = await api.get(
        `v7/cardinfo.php?fname=${encodeURIComponent(searchTerm)}`
      );

      if (response.data && response.data.data) {
        setCards(response.data.data);
      } else {
        setCards([]);
        setError("Nenhuma carta encontrada");
      }
    } catch (error) {
      console.log(error);
      setError("Erro ao buscar cartas. Tente novamente.");
      setCards([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="tab-content">
      <form onSubmit={(e) => searchCards(e)}>
        <input
          placeholder="Digite o nome da carta de Yu-Gi-Oh"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Pesquisar"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {cards.length > 0 && (
        <div className="cards-grid">
          <h2 className="results-title">
            {cards.length} carta(s) encontrada(s)
          </h2>
          <div className="cards-list">
            {cards.map((card) => (
              <CardItem key={card.id} card={card} onClick={setSelectedCard} />
            ))}
          </div>
        </div>
      )}
      {/* Modal de detalhes da carta */}
      <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}
