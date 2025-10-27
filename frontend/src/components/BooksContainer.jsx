// src/components/BooksContainer.jsx

import BookCard from './BookCard';
import './BooksContainer.css';

function BooksContainer({ books }) {
  return (
    <div className="books-container">
      {books.length === 0 ? (
        <div className="no-books">
          <p>Nenhum livro encontrado na biblioteca</p>
        </div>
      ) : (
        books.map((book) => (
          <BookCard key={book.id} book={book} />    
        ))
      )}
    </div>
  );
}

export default BooksContainer;