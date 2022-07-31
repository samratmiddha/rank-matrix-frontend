import { put, takeLatest } from "redux-saga/effects";
import {
	getErrorBody,
	getErrorMessage,
	getRequest,
} from "../../constants/apis";
import { toastDuration } from "../../constants/general";
import {
	fetchInstituteListError,
	fetchInstituteListSuccess,
	fetchRankListError,
	fetchRankListSuccess,
	fetchSeatMatrixError,
	fetchSeatMatrixSuccess,
} from "../actions/list";
import { showToast } from "../actions/toast";
import {
	FETCH_INSTITUTE_LIST,
	FETCH_RANK_LIST,
	FETCH_SEAT_MATRIX,
} from "../actionTypes";

export function* fetchInstituteList(action) {
	let requestURL = "";
	requestURL = `/soce/api/v1/institute/list/?institute_type=${
		action.payload.instituteType
	}&page=${action.payload.page}${
		action.payload.search.length === 0 ? "" : "&search=" + action.payload.search
	}`;

	if (action.payload.orderField) {
		requestURL += `&ordering=${action.payload.orderType === "asc" ? "" : "-"}${
			action.payload.orderField
		}`;
	}

	try {
		const response = yield getRequest(requestURL);
		yield put(fetchInstituteListSuccess(response));
		if (response.data.results.length === 0) {
			yield put(showToast("No data found", "warning", toastDuration));
		}
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchInstituteListError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export function* fetchSeatMatrix(action) {
	let requestURL = "";
	requestURL = `/soce/api/v1/seat/list/?institute_type=${
		action.payload.instituteType
	}&page=${action.payload.page}${
		action.payload.search.length === 0 ? "" : "&search=" + action.payload.search
	}`;

	if (action.payload.orderField) {
		requestURL += `&ordering=${action.payload.orderType === "asc" ? "" : "-"}${
			action.payload.orderField
		}`;
	}
	if (action.payload.year) {
		requestURL += `&year=${action.payload.year}`;
	}
	if (action.payload.increase) {
		requestURL += `&increase=action.payload.increase`;
	}

	try {
		const response = yield getRequest(requestURL);
		yield put(fetchSeatMatrixSuccess(response));
		if (response.data.results.length === 0) {
			yield put(showToast("No data found", "warning", toastDuration));
		}
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchSeatMatrixError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export function* fetchRankList(action) {
	let requestURL = "";
	requestURL = `/soce/api/v1/ranks/list/?institute_type=${
		action.payload.instituteType
	}&page=${action.payload.page}${
		action.payload.search.length === 0 ? "" : "&search=" + action.payload.search
	}`;

	if (action.payload.orderField) {
		requestURL += `&ordering=${action.payload.orderType === "asc" ? "" : "-"}${
			action.payload.orderField
		}`;
	}

	if (action.payload.round) {
		requestURL += `&year=${action.payload.year}&round=${
			action.payload.year === 2015 ? "1" : action.payload.round
		}`;
	}

	try {
		const response = yield getRequest(requestURL);
		yield put(fetchRankListSuccess(response));
		if (response.data.results.length === 0) {
			yield put(showToast("No data found", "warning", toastDuration));
		}
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchRankListError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export const instituteListSaga = [
	takeLatest(FETCH_INSTITUTE_LIST, fetchInstituteList),
	takeLatest(FETCH_SEAT_MATRIX, fetchSeatMatrix),
	takeLatest(FETCH_RANK_LIST, fetchRankList),
];
