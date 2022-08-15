import produce from "immer";
import {
	RECENT_UPDATE_FETCH,
	RECENT_UPDATE_FETCH_ERROR,
	RECENT_UPDATE_FETCH_SUCCESS,
} from "../actionTypes";

export const initialState = {
	recentUpdate: {
		loading: false,
		error: false,
		data: [],
	},
};

const reducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case RECENT_UPDATE_FETCH:
				draft.recentUpdate.loading = true;
				draft.recentUpdate.error = false;
				draft.recentUpdate.data = [];
				break;
			case RECENT_UPDATE_FETCH_SUCCESS:
				draft.recentUpdate.loading = false;
				draft.recentUpdate.error = false;
				draft.recentUpdate.data = action.response.data.reverse();
				break;
			case RECENT_UPDATE_FETCH_ERROR:
				draft.recentUpdate.loading = false;
				draft.recentUpdate.error = true;
				draft.recentUpdate.data = [];
				break;
			default:
				break;
		}
	});

export default reducer;
