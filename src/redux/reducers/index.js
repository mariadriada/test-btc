import { combineReducers } from "redux"
import coins from "./coinsReducer"
import conversionData from "./conversionReducer"
import key from "./tabReducer"

export default combineReducers({ 
    coins, 
    conversionData,
    key
})
