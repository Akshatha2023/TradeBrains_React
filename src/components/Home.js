import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToWatchlist } from '../redux/actions';
import StockList from './StockList';

import styles from "./Home.module.css"


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const apiKey = 'ND910K57CB1VJH3X'; 

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      
      return;
    }

    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=${apiKey}`
      );

      const data = response.data.bestMatches || [];
      setSearchResults(data);
    } catch (error) {
      console.error('API request failed', error);
      
    }
  };

  const handleAddToWatchlist = (stock) => {
    
    dispatch(addToWatchlist(stock));
  };

  useEffect(() => {
   
  }, []);

  return (
    <>

    <div className={styles.flex}>

      <input
        type="text"
        placeholder="Search for stocks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className={styles.searchButton}
      onClick={handleSearch}>Search</button>
      
    </div>
    <StockList data={searchResults} handleAddToWatchlist={handleAddToWatchlist} />
    </>
  );
};

export default Home;
