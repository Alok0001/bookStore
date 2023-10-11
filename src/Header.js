// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <div className="brand">
          <h1>
            <Link to="/" className="brand-link">
              BookStore
            </Link>
          </h1>
        </div>
        <div className="nav-links">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/contact" className="header-link">
            Contact Us
          </Link>
          <Link to="/booklist" className="header-link">
            BookList
          </Link>
          <a href="/search" className="header-link">
            Search
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
