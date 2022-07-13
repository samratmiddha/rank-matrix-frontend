import { all } from "redux-saga/effects";
import watchAll from "./dashboard";

export default function* rootSaga() {
  yield all([watchAll()]);
}
