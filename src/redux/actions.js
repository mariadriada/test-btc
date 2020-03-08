import { GET_ALL_COINS, SET_ALL_COINS, LOAD_FAIL } from "./actionTypes";

export const getAllCoins = content => ({
  type: GET_ALL_COINS,
  payload: {
    test: 'message from action GET_ALL_COINS'
  }
})

export const setCoins = content => ({
  type: SET_ALL_COINS,
  payload: {
    coins: content
  }
})

export const setError = error => ({
    type: LOAD_FAIL,
    error
})