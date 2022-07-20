import {
  FETCH_ALL_ALL_PREDICTION,
  FETCH_ALL_ALL_PREDICTION_ERROR,
  FETCH_ALL_ALL_PREDICTION_SUCCESS,
  FETCH_ALL_ONE_PREDICTION,
  FETCH_ALL_ONE_PREDICTION_ERROR,
  FETCH_ALL_ONE_PREDICTION_SUCCESS,
  FETCH_ONE_ALL_PREDICTION,
  FETCH_ONE_ALL_PREDICTION_ERROR,
  FETCH_ONE_ALL_PREDICTION_SUCCESS,
  FETCH_ONE_ONE_PREDICTION,
  FETCH_ONE_ONE_PREDICTION_ERROR,
  FETCH_ONE_ONE_PREDICTION_SUCCESS,
  FETCH_TEST_CHOICE,
  FETCH_TEST_CHOICE_ERROR,
  FETCH_TEST_CHOICE_SUCCESS,
} from "../actionTypes";

export const fetchAllAllPrediction = (payload) => {
  return {
    type: FETCH_ALL_ALL_PREDICTION,
    payload,
  };
};

export const fetchAllAllPredictionSuccess = (response) => {
  return {
    type: FETCH_ALL_ALL_PREDICTION_SUCCESS,
    response,
  };
};

export const fetchAllAllPredictionError = (errorBody) => {
  return {
    type: FETCH_ALL_ALL_PREDICTION_ERROR,
    errorBody,
  };
};

export const fetchAllOnePrediction = (payload) => {
  return {
    type: FETCH_ALL_ONE_PREDICTION,
    payload,
  };
};

export const fetchAllOnePredictionSuccess = (response) => {
  return {
    type: FETCH_ALL_ONE_PREDICTION_SUCCESS,
    response,
  };
};

export const fetchAllOnePredictionError = (errorBody) => {
  return {
    type: FETCH_ALL_ONE_PREDICTION_ERROR,
    errorBody,
  };
};

export const fetchOneAllPrediction = (payload) => {
  return {
    type: FETCH_ONE_ALL_PREDICTION,
    payload,
  };
};

export const fetchOneAllPredictionSuccess = (response) => {
  return {
    type: FETCH_ONE_ALL_PREDICTION_SUCCESS,
    response,
  };
};

export const fetchOneAllPredictionError = (errorBody) => {
  return {
    type: FETCH_ONE_ALL_PREDICTION_ERROR,
    errorBody,
  };
};

export const fetchOneOnePrediction = (payload) => {
  return {
    type: FETCH_ONE_ONE_PREDICTION,
    payload,
  };
};

export const fetchOneOnePredictionSuccess = (response) => {
  return {
    type: FETCH_ONE_ONE_PREDICTION_SUCCESS,
    response,
  };
};

export const fetchOneOnePredictionError = (errorBody) => {
  return {
    type: FETCH_ONE_ONE_PREDICTION_ERROR,
    errorBody,
  };
};

export const fetchTestChoice = (payload) => {
  return {
    type: FETCH_TEST_CHOICE,
    payload,
  };
};

export const fetchTestChoiceSuccess = (response) => {
  return {
    type: FETCH_TEST_CHOICE_SUCCESS,
    response,
  };
};

export const fetchTestChoiceError = (errorBody) => {
  return {
    type: FETCH_TEST_CHOICE_ERROR,
    errorBody,
  };
};
