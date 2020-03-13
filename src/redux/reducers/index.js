import { combineReducers } from "redux"
import coins from "./coinsReducer"
import conversionData from "./conversionReducer"
import keyTab from "./tabReducer"

export default combineReducers({ 
    coins, 
    conversionData,
    keyTab
})
