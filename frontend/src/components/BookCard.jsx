// src/components/BookCard.jsx

import { useState } from 'react';
import './BookCard.css';

function BookCard({ book }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e) => {
    console.log(`Erro ao carregar imagem para o livro: ${book.title}`);
    setImageError(true);
    e.currentTarget.src = 'https://via.placeholder.com/400x600/667eea/ffffff?text=Sem+Imagem';
  };

  const handleClick = () => {
    console.log('Livro clicado:', book);
    // TODO: Implementar navegação para página de detalhes do livro
    // Por exemplo: navigate(`/book/${book.id}`)
  };

  return (
    <div className="book-card" onClick={handleClick}>
      <div className="book-image-container">
        <img
          src={imageError ? 'https://via.placeholder.com/400x600/667eea/ffffff?text=Sem+Imagem' : book.image}
          alt={`Capa do Livro ${book.title}`}
          className="book-image"
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-year">{book.year}</p>
      </div>
    </div>
  );
}

export default BookCard;