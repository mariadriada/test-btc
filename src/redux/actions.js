import {
  GET_ALL_COINS,
  SET_ALL_COINS,
  LOAD_FAIL,
  SET_CURRENT_COINS_SHOWING,
  CONVERTER,
  SET_CONVERSION,
  SET_KEY,
  SET_DATA
} from "./actionTypes";

export const getAllCoins = content => ({
  type: GET_ALL_COINS,
});

export const setCoins = content => ({
  type: SET_ALL_COINS,
  payload: {
    coins: content
  }
});

export const setCurrentCoinsShowing = nItemsLoaded => ({
  type: SET_CURRENT_COINS_SHOWING,
  payload: {
    nItemsLoaded
  }
});

export const converter = data => ({
  type: CONVERTER,
  data
});

export const setConversion = content => ({
  type: SET_CONVERSION,
  payload: content
});

export const setKey = key => ({
  type: SET_KEY,
  key
});

export const setData = content => ({
  type: SET_DATA,
  payload: content
});

export const setError = error => ({
  type: LOAD_FAIL,
  error
});
