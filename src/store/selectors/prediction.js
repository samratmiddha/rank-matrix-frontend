import { createSelector } from "reselect";
import { initialState } from "../reducers/prediction";

const selectPrediction = (state) => state.prediction || initialState;

export const makeSelectAllAllPrediction = createSelector(
  selectPrediction,
  (pageState) => {
    return pageState.all_all;
  }
);

export const makeSelectAllOnePrediction = createSelector(
  selectPrediction,
  (pageState) => {
    return pageState.all_one;
  }
);

export const makeSelectOneAllPrediction = createSelector(
  selectPrediction,
  (pageState) => {
    return pageState.one_all;
  }
);

export const makeSelectOneOnePrediction = createSelector(
  selectPrediction,
  (pageState) => {
    return pageState.one_one;
  }
);

export const makeSelectTestChoice = createSelector(
  selectPrediction,
  (pageState) => {
    return pageState.test_choice;
  }
);
