// src/components/BooksContainer.tsx

import { Book } from '../types/book';
import BookCard from './BookCard';
import './BooksContainer.css';

interface BooksContainerProps {
    books: Book[];
}

function BooksContainer({ books }: BooksContainerProps) {
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