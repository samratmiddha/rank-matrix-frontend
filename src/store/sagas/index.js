import { all } from "redux-saga/effects";
import { dashboardSagas } from "./dashboard";
import { formSaga } from "./form";
import { instituteListSaga } from "./lists/instituteList";

export default function* rootSaga() {
  yield all([...dashboardSagas, ...formSaga, ...instituteListSaga]);
}
