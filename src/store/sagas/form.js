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
} from "../actions/form";
import { showToast } from "../actions/toast";
import { FETCH_INSTITUTE_TYPE } from "../actionTypes";

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

export const formSaga = [takeLatest(FETCH_INSTITUTE_TYPE, fetchInstituteType)];
