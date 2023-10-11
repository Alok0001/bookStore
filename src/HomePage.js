// src/components/HomePage.js

import React from 'react';
import './Home.css'; 

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to Our Bookstore</h1>
        <p>Discover a world of books at your fingertips.</p>
      </header>
      <section className="featured-books">
        <h2>Featured Books</h2>
      </section>
      <section className="popular-authors">
        <h2>Popular Authors</h2>
      </section>
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
      </section>
    </div>
  );
}

export default HomePage;
