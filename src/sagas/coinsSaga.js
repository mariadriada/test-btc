import { takeEvery, call, put } from 'redux-saga/effects'

import { GET_ALL_COINS } from '../redux/actionTypes'
import { fetchCoins } from '../api'
import { setCoins, setError } from '../redux/actions'

export function* handleCoinsLoad(){ 
    try {       
        const coins = yield call(fetchCoins)               
        yield put(setCoins(coins))
    }
    catch(error){
        yield put(setError(error.toString()))
    }   
}

export default function* watchImagesLoad(){
    yield takeEvery(GET_ALL_COINS, handleCoinsLoad)
}