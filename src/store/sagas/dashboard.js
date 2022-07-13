import { all, put, takeLatest } from "redux-saga/effects";
import { getErrorBody, getRequest } from "../../constants/apis";
import { fetchNewUpdatesError, fetchNewUpdatesSuccess } from "../actions/dashboard";
import { NEW_UPDATE_FETCH } from "../actionTypes";

export function* fetchNewUpdates() {
    const requestURL = '/soce/api/v1/new_update/'
    try{
        const response = yield getRequest(requestURL);
        yield put(fetchNewUpdatesSuccess(response))
    }
    catch(err){
        yield put(fetchNewUpdatesError(getErrorBody(err)))
    }
}

export default function* watchAll() {
  yield all([takeLatest(NEW_UPDATE_FETCH, fetchNewUpdates)]);
}
