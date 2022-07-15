import {
  FETCH_INSTITUTE_TYPE,
  FETCH_INSTITUTE_TYPE_ERROR,
  FETCH_INSTITUTE_TYPE_SUCCESS,
  FETCH_YEAR,
  FETCH_YEAR_ERROR,
  FETCH_YEAR_SUCCESS,
} from "../actionTypes";

export const fetchInstituteType = () => {
    return {
        type: FETCH_INSTITUTE_TYPE,
    };
};

export const fetchInstituteTypeSuccess = (response) => {
    return {
        type: FETCH_INSTITUTE_TYPE_SUCCESS,
        response,
    };
};

export const fetchInstituteTypeError = (errorBody) => {
    return {
        type: FETCH_INSTITUTE_TYPE_ERROR,
        errorBody,
    }
}

export const fetchYear = () => {
    return {
        type: FETCH_YEAR,
    };
};

export const fetchYearSuccess = (response) => {
    return {
        type: FETCH_YEAR_SUCCESS,
        response,
    };
};

export const fetchYearError = (errorBody) => {
    return {
        type: FETCH_YEAR_ERROR,
        errorBody,
    }
}