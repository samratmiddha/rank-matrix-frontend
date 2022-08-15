import { put, takeLatest } from "redux-saga/effects";
import {
	getErrorBody,
	getErrorMessage,
	getRequest,
} from "../../constants/apis";
import { toastDuration } from "../../constants/general";
import {
	fetchRecentUpdatesError,
	fetchRecentUpdatesSuccess,
} from "../actions/dashboard";
import { showToast } from "../actions/toast";
import { RECENT_UPDATE_FETCH } from "../actionTypes";

export function* fetchRecentUpdates() {
	const requestURL = "/soce/api/v1/recent_updates/";
	try {
		const response = yield getRequest(requestURL);
		yield put(fetchRecentUpdatesSuccess(response));
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchRecentUpdatesError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export const dashboardSagas = [
	takeLatest(RECENT_UPDATE_FETCH, fetchRecentUpdates),
];
