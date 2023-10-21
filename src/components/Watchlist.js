import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../redux/actions'; 
import StockList from './StockList';
import '../components/style.css';

const LOCAL_STORAGE_KEY = 'watchlist';

const Watchlist = () => {
  const watchlistData = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = (stock) => {
  
    dispatch(removeFromWatchlist(stock));
  };

 
  useEffect(() => {
    const localWatchlistData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localWatchlistData) {
      const parsedData = JSON.parse(localWatchlistData);
      
      parsedData.forEach((stock) => {
        dispatch(addToWatchlist(stock));
      });
    }
  }, [dispatch]);

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(watchlistData));
  }, [watchlistData]);

  return (
    <div>
      <h2 style={{
        textAlign:'center'
      }}>Watchlist</h2>
      <StockList data={watchlistData} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />
    </div>
  );
};

export default Watchlist;
