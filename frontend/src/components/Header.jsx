// src/components/Header.jsx

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <h1 className="header-title">bibliotek_</h1>
          <p className="header-subtitle">Online open-source library ~ free</p>
        </div>
        <div className="navigation">
          <button className="home">Home</button>
          <button className="my-books">My Books</button>
          <button className="pdf-reader">PDF Reader</button>
          <button className="new-uploads">New Uploads</button>
        </div>
          
      </div>
    </header>
  );
}

export default Header;