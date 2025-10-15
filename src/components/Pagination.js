import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  loading,
}) {
  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1 || loading}
        className="pagination-button"
        aria-label="Primeira página"
      >
        <span role="img" aria-label="primeiro">
          ⏮️
        </span>{" "}
        Primeira
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        className="pagination-button"
        aria-label="Página anterior"
      >
        <span role="img" aria-label="anterior">
          ◀️
        </span>{" "}
        Anterior
      </button>

      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        className="pagination-button"
        aria-label="Próxima página"
      >
        Próxima{" "}
        <span role="img" aria-label="próximo">
          ▶️
        </span>
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages || loading}
        className="pagination-button"
        aria-label="Última página"
      >
        Última{" "}
        <span role="img" aria-label="último">
          ⏭️
        </span>
      </button>
    </div>
  );
}
