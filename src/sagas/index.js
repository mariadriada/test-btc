import { all } from 'redux-saga/effects';

import coinsSaga from './coinsSaga'

export default function* rootSaga(){   
    yield all([
        coinsSaga()
    ])
}