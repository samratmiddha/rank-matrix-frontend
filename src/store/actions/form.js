import {
  FETCH_INSTITUTE_TYPE,
  FETCH_INSTITUTE_TYPE_ERROR,
  FETCH_INSTITUTE_TYPE_SUCCESS,
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