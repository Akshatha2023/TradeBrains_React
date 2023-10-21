
import React from 'react';
import Styles from "./StockList.module.css";
const StockList = ({ data, handleAddToWatchlist, handleRemoveFromWatchlist }) => (
  <div className={Styles.flexContainer}>
    {data.map((stock) => (
      <div key={stock['1. symbol']}>
        {stock['2. name']} - {stock['1. symbol']} - {stock['3. type']}
        {handleAddToWatchlist && (
          <button className={Styles.plus} onClick={() =>{ handleAddToWatchlist(stock) 
            alert("stock got added in WatchList")
          }}>+</button>
        )}
        {handleRemoveFromWatchlist && (
          <button className={Styles.plus} onClick={() => {handleRemoveFromWatchlist(stock)
            alert("Stock got Removed from your Watchlist")
          }}>-</button>
        )}
      </div>
    ))}
  </div>
);

export default StockList;
