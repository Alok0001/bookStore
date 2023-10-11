// src/components/Footer.js

import React from 'react';
import './Footer.css'; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Bookstore is your go-to destination for discovering and exploring a vast collection of books from various genres and authors. We are passionate about bringing the joy of reading to book lovers around the world.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/booklist">BookList</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Info</h2>
          <address>
            <p>Email: contact@bookstore.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Bookstore | All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
