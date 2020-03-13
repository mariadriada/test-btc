import { SET_ALL_COINS, SET_CURRENT_COINS_SHOWING } from "../actionTypes";

const initialState = {
  allCoins: [],
  loaded: false,
  currentList: [],
  currentLastItem: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_COINS:
      {
        return {
          ...state,
          allCoins: action.payload.coins,
          loaded: true,
          currentList: action.payload.coins.prices.slice(0, 20)
        };
      }
      break;
    case SET_CURRENT_COINS_SHOWING:
      {
        return {
          ...state,
          currentList: state.allCoins.prices.slice(
            0,
            action.payload.nItemsLoaded
          )
        };
      }
      break;
    default:
      return state;
  }
}
