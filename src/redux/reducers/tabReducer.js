import { SET_KEY } from "../actionTypes";

const initialState = {
    key: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_KEY:
      return action.key;
      break;
    default:
      return state;
  }
}
