import { GET_ALL_COINS } from "../actionTypes";

const initialState = {
  allCoins: [],
  byIds: {}
};

export default function(state = initialState, action) {
  console.log("Reducer", state, action);
  switch (action.type) {
    case GET_ALL_COINS:
      {
        console.log("GET_ALL_COINS reducer")
        return {
            ...state,
            allCoins: []
        }
      }
      break;
    default:
      return state;
  }
}
