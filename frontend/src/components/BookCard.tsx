import { Book } from '../types/book';
import './BookCard.css'

interface BookCardProps {
    book: Book;
}

function BookCard({ book }: BookCardProps) {
    return (
        <div className="book-card" id="book">
            <div className = "Book-image-container">
                <img
                    src={book.image}
                    alt={`Capa do Livro ${book.title}`}
                    className="book-image" 
                />
            </div>
            <div className="book-info">
                <h3 class-Name="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-year">{book.year}</p>
            </div>
        </div>
    );
}

export default BookCard;