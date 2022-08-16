import { put, takeEvery, takeLatest } from "redux-saga/effects";
import {
	getErrorBody,
	getErrorMessage,
	getRequest,
} from "../../constants/apis";
import { toastDuration } from "../../constants/general";
import {
	fetchAllAllPredictionError,
	fetchAllAllPredictionSuccess,
	fetchAllOnePredictionError,
	fetchAllOnePredictionSuccess,
	fetchOneAllPredictionError,
	fetchOneAllPredictionSuccess,
	fetchOneOnePredictionError,
	fetchOneOnePredictionSuccess,
	fetchTestChoiceError,
	fetchTestChoiceSuccess,
} from "../actions/prediction";
import { showToast } from "../actions/toast";
import {
	FETCH_ALL_ALL_PREDICTION,
	FETCH_ALL_ONE_PREDICTION,
	FETCH_ONE_ALL_PREDICTION,
	FETCH_ONE_ONE_PREDICTION,
	FETCH_TEST_CHOICE,
} from "../actionTypes";

export function* fetchAllAllPrediction(action) {
	const requestURL = `/soce/api/v1/all_all/rank_list/?institute_type=${action.payload.instituteType}&year=${action.payload.year}&round=${action.payload.round}&category=${action.payload.category}&seat_pool=${action.payload.seatPool}&quota=${action.payload.quota}&option=${action.payload.option}&rank=${action.payload.rank}&cutoff=${action.payload.cutoff}`;

	try {
		const response = yield getRequest(requestURL);
		yield put(fetchAllAllPredictionSuccess(response));
		if (response.data.institutes.length === 0) {
			yield put(showToast("No data found", "warning", toastDuration));
		}
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchAllAllPredictionError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export function* fetchAllOnePrediction(action) {
	const requestURL = `/soce/api/v1/all_one/rank_list/?institute_id=${action.payload.instituteId}&category=${action.payload.category}&seat_pool=${action.payload.seatPool}&quota=${action.payload.quota}&rank=${action.payload.rank}&cutoff=${action.payload.cutoff}`;

	try {
		const response = yield getRequest(requestURL);
		yield put(fetchAllOnePredictionSuccess(response));
		if (response.data.institutes.length === 0) {
			yield put(showToast("No data found", "warning", toastDuration));
		}
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchAllOnePredictionError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export function* fetchOneAllPrediction(action) {
	const requestURL = `/soce/api/v1/one_all/rank_list/?branch_id=${action.payload.branchId}&category=${action.payload.category}&seat_pool=${action.payload.seatPool}&quota=${action.payload.quota}&rank=${action.payload.rank}&cutoff=${action.payload.cutoff}&institute_type=${action.payload.instituteType}`;

	try {
		const response = yield getRequest(requestURL);
		yield put(fetchOneAllPredictionSuccess(response));
		if (response.data.institutes.length === 0) {
			yield put(showToast("No data found", "warning", toastDuration));
		}
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchOneAllPredictionError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export function* fetchOneOnePrediction(action) {
	const requestURL = `/soce/api/v1/one_one/rank_list/?branch_id=${action.payload.branchId}&category=${action.payload.category}&seat_pool=${action.payload.seatPool}&quota=${action.payload.quota}&rank=${action.payload.rank}&cutoff=${action.payload.cutoff}&institute_id=${action.payload.instituteId}`;

	try {
		const response = yield getRequest(requestURL);
		yield put(fetchOneOnePredictionSuccess(response));
		if (response.data.keys.length === 0) {
			yield put(showToast("No data found", "warning", toastDuration));
		}
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchOneOnePredictionError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export function* fetchTestChoice(action) {
	const requestURL = `/soce/api/v1/choice/rank_list/?branch_id=${
		action.payload.branchId
	}&category=${action.payload.category}&seat_pool=${
		action.payload.seatPool
	}&quota=${action.payload.quota}&rank=${action.payload.rank}&cutoff=${
		action.payload.cutoff
	}&institute_id=${action.payload.instituteId}&year=${
		action.payload.year
	}&round=${action.payload.round}${
		action.payload.choice === "both" && "&mains_rank=" + action.payload.rankMain
	}`;
	try {
		const response = yield getRequest(requestURL);
		yield put(fetchTestChoiceSuccess(response));
	} catch (err) {
		const errBody = getErrorBody(err);
		yield put(fetchTestChoiceError(errBody));
		yield put(showToast(getErrorMessage(errBody), "error", toastDuration));
	}
}

export const predictionSaga = [
	takeLatest(FETCH_ALL_ALL_PREDICTION, fetchAllAllPrediction),
	takeLatest(FETCH_ALL_ONE_PREDICTION, fetchAllOnePrediction),
	takeLatest(FETCH_ONE_ALL_PREDICTION, fetchOneAllPrediction),
	takeLatest(FETCH_ONE_ONE_PREDICTION, fetchOneOnePrediction),
	takeEvery(FETCH_TEST_CHOICE, fetchTestChoice),
];
