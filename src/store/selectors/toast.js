import { createSelector } from "reselect";
import { initialState } from "../reducers/toast";

const selectToast = (state) => state.toast || initialState

export const makeSelectShowToast = createSelector(
    selectToast,
    (pageState) => {
        return pageState.toast;
    }
)