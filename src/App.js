import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import BookList from './BookList';
import SearchResults from './Search'; 

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/booklist" component={BookList} />
            <Route path="/search" component={SearchResults} /> 
          </Routes>      
      </div>
    </Router>
  );
}

export default App;

