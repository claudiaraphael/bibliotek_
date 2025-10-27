// src/App.jsx

import { useState, useEffect } from 'react';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer';
import './App.css';

// Dados mockados para desenvolvimento
const mockBooks = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    image: "https://picsum.photos/seed/1984/400/600"
  },
  {
    id: 2,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    year: 1899,
    image: "https://picsum.photos/seed/domcasmurro/400/600"
  },
  {
    id: 3,
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    image: "https://picsum.photos/seed/principe/400/600"
  },
  {
    id: 4,
    title: "Harry Potter e a Pedra Filosofal",
    author: "J.K. Rowling",
    year: 1997,
    image: "https://picsum.photos/seed/harrypotter/400/600"
  },
  {
    id: 5,
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    year: 1954,
    image: "https://picsum.photos/seed/lotr/400/600"
  },
  {
    id: 6,
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    year: 1967,
    image: "https://picsum.photos/seed/solidao/400/600"
  }
];

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('App montado - iniciando carregamento');
    
    const loadBooks = async () => {
      try {
        // TODO: Substituir por fetch real da API
        // const response = await fetch('http://localhost:8000/api/books');
        // if (!response.ok) {
        //   throw new Error('Falha ao carregar livros');
        // }
        // const data = await response.json();
        // setBooks(data);
        
        // Por enquanto, usa dados mockados
        setTimeout(() => {
          console.log('Livros carregados:', mockBooks);
          setBooks(mockBooks);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error('Erro ao carregar livros:', err);
        setError(err.message || 'Erro ao carregar livros');
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  console.log('Renderizando App - loading:', loading, 'books:', books.length);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {loading ? (
          <div className="loading">
            <p>Carregando biblioteca...</p>
          </div>
        ) : error ? (
          <div className="error">
            <p>Erro: {error}</p>
            <button onClick={() => window.location.reload()}>
              Tentar novamente
            </button>
          </div>
        ) : (
          <BooksContainer books={books} />
        )}
      </main>
    </div>
  );
}

export default App;