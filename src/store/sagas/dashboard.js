import { put, takeLatest } from "redux-saga/effects";
import { getErrorBody, getRequest } from "../../constants/apis";
import {
  fetchNewUpdatesError,
  fetchNewUpdatesSuccess,
  fetchRecentUpdatesError,
  fetchRecentUpdatesSuccess,
} from "../actions/dashboard";
import { NEW_UPDATE_FETCH, RECENT_UPDATE_FETCH } from "../actionTypes";

export function* fetchNewUpdates() {
  const requestURL = "/soce/api/v1/new_update/";
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchNewUpdatesSuccess(response));
  } catch (err) {
    yield put(fetchNewUpdatesError(getErrorBody(err)));
  }
}

export function* fetchRecentUpdates() {
  const requestURL = "/soce/api/v1/recent_updates/";
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchRecentUpdatesSuccess(response));
  } catch (err) {
    yield put(fetchRecentUpdatesError(getErrorBody(err)));
  }
}

export const dashboardSagas = [
  takeLatest(NEW_UPDATE_FETCH, fetchNewUpdates),
  takeLatest(RECENT_UPDATE_FETCH, fetchRecentUpdates),
];
