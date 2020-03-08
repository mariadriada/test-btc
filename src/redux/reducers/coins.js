import { SET_ALL_COINS } from "../actionTypes";

const initialState = {
  allCoins: [],
  byIds: {}
};

export default function(state = initialState, action) {
  console.log("Reducer", state, action);
  switch (action.type) {
    case SET_ALL_COINS:
      {
        console.log("SET_ALL_COINS reducer", state, action);
        return {
          ...state,
          allCoins: action.payload.coins
        };
      }
      break;
    default:
      return state;
  }
}
