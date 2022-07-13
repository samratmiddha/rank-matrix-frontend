import {
  NEW_UPDATE_FETCH,
  NEW_UPDATE_FETCH_ERROR,
  NEW_UPDATE_FETCH_SUCCESS,
  RECENT_UPDATE_FETCH,
  RECENT_UPDATE_FETCH_ERROR,
  RECENT_UPDATE_FETCH_SUCCESS,
} from "../actionTypes";

export const fetchNewUpdates = () => {
  return {
    type: NEW_UPDATE_FETCH,
  };
};

export const fetchNewUpdatesSuccess = (response) => {
  return {
    type: NEW_UPDATE_FETCH_SUCCESS,
    response,
  };
};

export const fetchNewUpdatesError = (errorBody) => {
  return {
    type: NEW_UPDATE_FETCH_ERROR,
    errorBody,
  };
};

export const fetchRecentUpdates = () => {
  return {
    type: RECENT_UPDATE_FETCH,
  };
};

export const fetchRecentUpdatesSuccess = (response) => {
  return {
    type: RECENT_UPDATE_FETCH_SUCCESS,
    response,
  };
};

export const fetchRecentUpdatesError = (errorBody) => {
  return {
    type: RECENT_UPDATE_FETCH_ERROR,
    errorBody,
  };
};
