import React, { useState, useEffect } from "react";
import api from "../api.js";
import CardItem from "./CardItem";
import CardModal from "./CardModal";
import Pagination from "./Pagination";

export default function AllCardsTab() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCards] = useState(12500); // Total estimado de cartas
  const cardsPerPage = 20;
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    listAllCards(1);
  }, []);

  async function listAllCards(page = 1) {
    setLoading(true);
    setError("");

    try {
      const offset = (page - 1) * cardsPerPage;
      const response = await api.get(
        `v7/cardinfo.php?num=${cardsPerPage}&offset=${offset}`
      );

      if (response.data && response.data.data) {
        setCards(response.data.data);
        setCurrentPage(page);
      } else {
        setCards([]);
        setError("Nenhuma carta encontrada");
      }
    } catch (error) {
      console.log(error);
      setError("Erro ao carregar cartas. Tente novamente.");
      setCards([]);
    } finally {
      setLoading(false);
    }
  }

  function handlePageChange(newPage) {
    listAllCards(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startCard = (currentPage - 1) * cardsPerPage + 1;
  const endCard = Math.min(currentPage * cardsPerPage, totalCards);

  return (
    <div className="tab-content">
      {error && <p className="error-message">{error}</p>}

      {loading && cards.length === 0 && (
        <p className="loading-message">Carregando cartas...</p>
      )}

      {cards.length > 0 && (
        <div className="cards-grid">
          <h2 className="results-title">
            Mostrando cartas {startCard}-{endCard} de {totalCards}
          </h2>
          <div className="cards-list">
            {cards.map((card) => (
              <CardItem key={card.id} card={card} onClick={setSelectedCard} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              loading={loading}
            />
          )}
        </div>
      )}
      {/* Modal de detalhes da carta */}
      <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}
