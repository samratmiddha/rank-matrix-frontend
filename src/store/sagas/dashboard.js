import { put, takeLatest } from "redux-saga/effects";
import { getErrorBody, getErrorMessage, getRequest } from "../../constants/apis";
import { toastDuration } from "../../constants/general";
import {
  fetchNewUpdatesError,
  fetchNewUpdatesSuccess,
  fetchRecentUpdatesError,
  fetchRecentUpdatesSuccess,
} from "../actions/dashboard";
import { showToast } from "../actions/toast";
import { NEW_UPDATE_FETCH, RECENT_UPDATE_FETCH } from "../actionTypes";

export function* fetchNewUpdates() {
  const requestURL = "/soce/api/v1/new_update/";
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchNewUpdatesSuccess(response));

  } catch (err) {
    const errBody = getErrorBody(err);
    yield put(fetchNewUpdatesError(errBody));
    yield put(showToast(getErrorMessage(errBody), 'error', toastDuration))
  }
}

export function* fetchRecentUpdates() {
  const requestURL = "/soce/api/v1/recent_updates/";
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchRecentUpdatesSuccess(response));
  } catch (err) {
    const errBody = getErrorBody(err);
    yield put(fetchRecentUpdatesError(errBody));
    yield put(showToast(getErrorMessage(errBody), 'error', toastDuration))
  }
}

export const dashboardSagas = [
  takeLatest(NEW_UPDATE_FETCH, fetchNewUpdates),
  takeLatest(RECENT_UPDATE_FETCH, fetchRecentUpdates),
];
