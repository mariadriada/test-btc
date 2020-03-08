import { GET_ALL_COINS } from "./actionTypes"

export const getAllCoins = content => ({
  type: GET_ALL_COINS,
  payload: {
    test: 'message from action GET_ALL_COINS'
  }
})