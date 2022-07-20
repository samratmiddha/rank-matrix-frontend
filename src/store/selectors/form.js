import { createSelector } from "reselect";
import { initialState } from "../reducers/form";

const selectData = (state) => state.formData || initialState;

export const makeSelectInstituteType = createSelector(
  selectData,
  (pageState) => {
    return pageState.institutesType;
  }
);

export const makeSelectYear = createSelector(selectData, (pageState) => {
  return pageState.year;
});

export const makeSelectRound = createSelector(selectData, (pageState) => {
  return pageState.rounds;
});

export const makeSelectGender = createSelector(selectData, (pageState) => {
  return pageState.gender;
});

export const makeSelectCategory = createSelector(selectData, (pageState) => {
  return pageState.category;
});

export const makeSelectQuota = createSelector(selectData, (pageState) => {
  return pageState.quota;
});

export const makeSelectInstituteList = createSelector(
  selectData,
  (pageState) => {
    return pageState.institutesList;
  }
);

export const makeSelectBranchList = createSelector(
  selectData,
  (pageState) => {
    return pageState.branchList;
  }
);

export const makeSelectBranchOneOneList = createSelector(
  selectData,
  (pageState) => {
    return pageState.branchOneOneList;
  }
);
