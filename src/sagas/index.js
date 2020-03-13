import { all } from "redux-saga/effects";

import coinsSaga from "./coinsSaga";
import converterSaga from "./converterSaga";

export default function* rootSaga() {
  yield all([coinsSaga(), converterSaga()]);
}
