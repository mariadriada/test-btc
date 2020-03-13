import { takeEvery, call, put } from "redux-saga/effects";
import { CONVERTER } from "../redux/actionTypes";
import { converterCoins } from "../api";
import { setConversion, setError } from "../redux/actions";

export function* handleConverter(req) {
  //const qty = parseFloat(req.data.qty);
  const qty = req.data.qty;
  const to = req.data.to.toLowerCase();
  const from = req.data.from.toLowerCase();

  try {
    const result = yield call(converterCoins, qty, to, from);
    yield put(setConversion(result));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export default function* watchConverterLoad() {
  yield takeEvery(CONVERTER, handleConverter);
}
