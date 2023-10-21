
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from './actionTypes';

export const addToWatchlist = (stock) => ({
  type: ADD_TO_WATCHLIST,
  payload: stock,
});

export const removeFromWatchlist = (stock) => ({
  type: REMOVE_FROM_WATCHLIST,
  payload: stock,
});


