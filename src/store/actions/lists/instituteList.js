import {
  FETCH_INSTITUTE_LIST,
  FETCH_INSTITUTE_LIST_ERROR,
  FETCH_INSTITUTE_LIST_SUCCESS,
} from "../../actionTypes";

export const fetchInstituteList = (payload) => {
    return {
        type: FETCH_INSTITUTE_LIST,
        payload,
    };
};

export const fetchInstituteListSuccess = (response) => {
    return {
        type: FETCH_INSTITUTE_LIST_SUCCESS,
        response,
    };
};

export const fetchInstituteListError = (errorBody) => {
    return {
        type: FETCH_INSTITUTE_LIST_ERROR,
        errorBody,
    };
};
