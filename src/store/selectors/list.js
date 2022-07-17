import { createSelector } from "reselect";
import { initialState } from "../reducers/list";

const selectList = (state) => state.list || initialState;

export const makeSelectInstituteList = createSelector(
  selectList,
  (pageState) => {
    return pageState.instituteList;
  }
);

export const makeSelectSeatMatrix = createSelector(
  selectList,
  (pageState) => {
    return pageState.seatMatrix;
  }
);

export const makeSelectRankList = createSelector(
  selectList,
  (pageState) => {
    return pageState.rankList;
  }
);
