import { createSelector } from "reselect";
import { initialState } from "../reducers/dashboard";

const selectDashboard = (state) => state.dashboard || initialState;

export const makeSelectNewUpdate = createSelector(
    selectDashboard,
    (pageState) => {
        return pageState.newUpdate;
    }
);

export const makeSelectRecentUpdate = createSelector(
    selectDashboard,
    (pageState) => {
        return pageState.recentUpdate;
    }
);
