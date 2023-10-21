import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Watchlist from './components/Watchlist';

function App() {
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  const buttonHoverStyle = {
    backgroundColor: '#555',
  };


  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginRight: '10px',
    textDecoration: 'none',

  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ ...buttonContainerStyle, justifyContent: 'center' }}>
              <button style={buttonStyle}>Home</button>
            </Link>
            <Link to="/watchlist" style={{ ...buttonContainerStyle, justifyContent: 'center' }}>
              <button style={buttonStyle}>Watchlist</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
