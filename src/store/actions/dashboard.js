import { NEW_UPDATE_FETCH, NEW_UPDATE_FETCH_ERROR, NEW_UPDATE_FETCH_SUCCESS } from "../actionTypes";

export const fetchNewUpdates = () => {
  return {
    type: NEW_UPDATE_FETCH,
  };
};

export const fetchNewUpdatesSuccess = (response) => {
    console.log("action success", response)
  return {
    type: NEW_UPDATE_FETCH_SUCCESS,
    response,
  };
};

export const fetchNewUpdatesError = (errorBody) => {
    console.log("action error", errorBody)
    return {
        type: NEW_UPDATE_FETCH_ERROR,
        errorBody,
    }
}