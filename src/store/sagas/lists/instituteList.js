import { put, takeLatest } from "redux-saga/effects";
import {
  getErrorBody,
  getErrorMessage,
  getRequest,
} from "../../../constants/apis";
import { errorToastDuration } from "../../../constants/general";
import {
  fetchInstituteListError,
  fetchInstituteListSuccess,
} from "../../actions/lists/instituteList";
import { showToast } from "../../actions/toast";
import { FETCH_INSTITUTE_LIST } from "../../actionTypes";

export function* fetchInstituteList(action) {
  console.log(action.payload, action.payload.orderField === "");

  const requestURL = `/soce/api/v1/institute/list/?institute_type=${
    action.payload.instituteType
  }&page=${action.payload.page}${
    action.payload.search.length === 0 ? "" : "&search=" + action.payload.search
  }
  ${
    action.payload.orderField === ""
      ? ""
      : action.payload.order === "asc"
      ? "&ordering=" + action.payload.orderField
      : "&ordering=-" + action.page.orderField
  }`;
  console.log(requestURL)
  try {
    const response = yield getRequest(requestURL);
    yield put(fetchInstituteListSuccess(response));
  } catch (err) {
    const errBody = getErrorBody(err);
    yield put(fetchInstituteListError(errBody));
    yield put(showToast(getErrorMessage(errBody), "error", errorToastDuration));
  }
}

export const instituteListSaga = [
  takeLatest(FETCH_INSTITUTE_LIST, fetchInstituteList),
];
