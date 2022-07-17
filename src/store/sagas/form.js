import { put, takeLatest } from "redux-saga/effects";
import {
  getErrorBody,
  getErrorMessage,
  getRequest,
} from "../../constants/apis";
import { errorToastDuration } from "../../constants/general";
import {
  fetchInstituteTypeError,
  fetchInstituteTypeSuccess,
  fetchRoundError,
  fetchRoundSuccess,
  fetchYearError,
  fetchYearSuccess,
} from "../actions/form";
import { showToast } from "../actions/toast";
import { FETCH_INSTITUTE_TYPE, FETCH_ROUND, FETCH_YEAR } from "../actionTypes";

export function* fetchInstituteType() {
  const requestURL = "/soce/api/v1/available_type/";
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchInstituteTypeSuccess(response));
  } catch (err) {
    const errBody = getErrorBody(err);
    yield put(fetchInstituteTypeError(errBody));
    yield put(showToast(getErrorMessage(errBody), "error", errorToastDuration));
  }
}

export function* fetchYear() {
  const requestURL = "/soce/api/v1/latest_year/";
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchYearSuccess(response));
  } catch (err) {
    const errBody = getErrorBody(err);
    yield put(fetchYearError(errBody));
    yield put(showToast(getErrorMessage(errBody), "error", errorToastDuration));
  }
}


export function* fetchRound(action) {
  const requestURL = `/soce/api/v1/total_rounds/?year=${action.payload.year}`;
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchRoundSuccess(response));
  } catch (err) {
    const errBody = getErrorBody(err);
    yield put(fetchRoundError(errBody));
    yield put(showToast(getErrorMessage(errBody), "error", errorToastDuration));
  }
}

export const formSaga = [
  takeLatest(FETCH_INSTITUTE_TYPE, fetchInstituteType),
  takeLatest(FETCH_YEAR, fetchYear),
  takeLatest(FETCH_ROUND, fetchRound),
];
