import {
  FETCH_INSTITUTE_LIST,
  FETCH_INSTITUTE_LIST_ERROR,
  FETCH_INSTITUTE_LIST_SUCCESS,
  FETCH_SEAT_MATRIX,
  FETCH_SEAT_MATRIX_ERROR,
  FETCH_SEAT_MATRIX_SUCCESS,
  FETCH_RANK_LIST,
  FETCH_RANK_LIST_ERROR,
  FETCH_RANK_LIST_SUCCESS,
} from "../actionTypes";

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

export const fetchSeatMatrix = (payload) => {
    return {
        type: FETCH_SEAT_MATRIX,
        payload,
    };
};

export const fetchSeatMatrixSuccess = (response) => {
    return {
        type: FETCH_SEAT_MATRIX_SUCCESS,
        response,
    };
};

export const fetchSeatMatrixError = (errorBody) => {
    return {
        type: FETCH_SEAT_MATRIX_ERROR,
        errorBody,
    };
};

export const fetchRankList = (payload) => {
    return {
        type: FETCH_RANK_LIST,
        payload,
    };
};

export const fetchRankListSuccess = (response) => {
    return {
        type: FETCH_RANK_LIST_SUCCESS,
        response,
    };
};

export const fetchRankListError = (errorBody) => {
    return {
        type: FETCH_RANK_LIST_ERROR,
        errorBody,
    };
};
