import React from "react";

export default function CardItem({ card, onClick }) {
  return (
    <div
      className="card-item"
      onClick={() => onClick && onClick(card)}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image-container">
        <img
          src={card.card_images[0].image_url}
          alt={card.name}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <h3 className="card-name">{card.name}</h3>
        <p className="card-type">{card.type}</p>
        {card.atk !== undefined && (
          <p className="card-stats">
            ATK: {card.atk} / DEF: {card.def}
          </p>
        )}
      </div>
    </div>
  );
}
