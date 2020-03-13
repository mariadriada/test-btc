import { SET_CONVERSION, SET_DATA} from "../actionTypes";

const initialState = {
  data: {
    qty: "0.00",
    from: "BTC",
    to: "USD"
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CONVERSION:
      return {
        ...state,
        converted: action.payload
      }
      break;
    case SET_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload.value
        }
      }
      break;
    default:
      return state;
  }
}
