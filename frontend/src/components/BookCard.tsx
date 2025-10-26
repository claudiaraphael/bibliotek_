// src/components/BookCard.tsx

import { Book } from '../types/book';
import './BookCard.css';

interface BookCardProps {
    book: Book;
}

function BookCard({ book }: BookCardProps) {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = 'https://via.placeholder.com/400x600/667eea/ffffff?text=Sem+Imagem';
    };

    return (
        <div className="book-card">
            <div className="book-image-container">
                <img
                    src={book.image}
                    alt={`Capa do Livro ${book.title}`}
                    className="book-image"
                    onError={handleImageError}
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