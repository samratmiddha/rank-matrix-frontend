import { createSelector } from "reselect";
import { initialState } from "../reducers/dashboard";

const selectDashboard = (state) => state.dashboard || initialState;

export const makeSelectRecentUpdate = createSelector(
	selectDashboard,
	(pageState) => {
		return pageState.recentUpdate;
	}
);
