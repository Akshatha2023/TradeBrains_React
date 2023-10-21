const initialState = {
  watchlist: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      };
    case 'REMOVE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter((stock) => stock !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;