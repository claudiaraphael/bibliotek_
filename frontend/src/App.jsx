// src/App.tsx

import { useState, useEffect } from 'react';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer';
import { Book } from './types/book';
import './App.css';

// Dados mockados para desenvolvimento
const mockBooks: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    year: 1899,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    year: 1997,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    year: 1954,
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    year: 1967,
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=600&fit=crop"
  }
];

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento de dados
    // Futuramente, você vai fazer fetch da sua API FastAPI aqui
    const loadBooks = async () => {
      try {
        // TODO: Substituir por fetch real da API
        // const response = await fetch('http://localhost:8000/api/books');
        // const data = await response.json();
        // setBooks(data);
        // setLoading(false)
        // Por enquanto, usa dados mockados
        setTimeout(() => {
          setBooks(mockBooks);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erro ao carregar livros:', error);
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {loading ? (
          <div className="loading">
            <p>Carregando biblioteca...</p>
          </div>
        ) : (
          <BooksContainer books={books} />
        )}
      </main>
    </div>
  );
}

export default App;