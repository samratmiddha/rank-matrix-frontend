import { createSelector } from "reselect";
import { initialState } from "../reducers/form";

const selectData = (state) => state.formData || initialState;

export const makeSelectInstituteType = createSelector(
    selectData,
    (pageState) => {
        return pageState.institutes
    }
)

export const makeSelectYear = createSelector(
    selectData,
    (pageState) => {
        return pageState.year
    }
)