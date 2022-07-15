import { createSelector } from "reselect";
import { initialState } from "../../reducers/lists/instituteList";

const selectList = (state) => state.instituteList || initialState;

export const makeSelectInstituteList = createSelector(
  selectList,
  (pageState) => {
    return pageState.instituteList;
  }
);
