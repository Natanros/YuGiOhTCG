import React from "react";
import "./CardModal.css";

const CardModal = ({ card, onClose }) => {
  if (!card) return null;

  const img = card.card_images?.[0]?.image_url || "";
  const prices = card.card_prices?.[0] || {};

  return (
    <div className="card-modal-overlay" onClick={onClose}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        <span className="card-modal-close" onClick={onClose}>
          X
        </span>

        {/* Layout em duas colunas */}
        <div className="card-modal-content">
          {/* Coluna Esquerda: Imagem e informações básicas */}
          <div className="card-modal-left">
            <img src={img} alt={card.name} className="card-modal-img" />
            <div className="card-modal-basic-info">
              <h2>{card.name}</h2>
              <p>
                <strong>Tipo:</strong> {card.type}
              </p>
              <p>
                <strong>Raça:</strong> {card.race}
              </p>
              {card.atk !== undefined && (
                <p>
                  <strong>ATK:</strong> {card.atk} | <strong>DEF:</strong>{" "}
                  {card.def}
                </p>
              )}
              {card.level && (
                <p>
                  <strong>Nível:</strong> {card.level}
                </p>
              )}
              {card.attribute && (
                <p>
                  <strong>Atributo:</strong> {card.attribute}
                </p>
              )}
              {card.archetype && (
                <p>
                  <strong>Arquétipo:</strong> {card.archetype}
                </p>
              )}
            </div>
          </div>

          {/* Coluna Direita: Descrição e preços */}
          <div className="card-modal-right">
            <div className="card-modal-description">
              <h3>Descrição</h3>
              <p>{card.desc}</p>
            </div>

            <div className="card-modal-prices">
              <h4>Preços</h4>
              <ul>
                <li>Cardmarket: €{prices.cardmarket_price}</li>
                <li>TCGPlayer: ${prices.tcgplayer_price}</li>
                <li>eBay: ${prices.ebay_price}</li>
                <li>Amazon: ${prices.amazon_price}</li>
                <li>CoolStuffInc: ${prices.coolstuffinc_price}</li>
              </ul>
            </div>

            <a
              href={card.ygoprodeck_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-modal-link"
            >
              Ver no YGOPRODECK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
