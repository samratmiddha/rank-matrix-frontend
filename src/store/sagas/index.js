import { all } from "redux-saga/effects";
import { dashboardSagas } from "./dashboard";

export default function* rootSaga() {
  yield all([
    ...dashboardSagas,
  ]);
}
