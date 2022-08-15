import {
	RECENT_UPDATE_FETCH,
	RECENT_UPDATE_FETCH_ERROR,
	RECENT_UPDATE_FETCH_SUCCESS,
} from "../actionTypes";

export const fetchRecentUpdates = () => {
	return {
		type: RECENT_UPDATE_FETCH,
	};
};

export const fetchRecentUpdatesSuccess = (response) => {
	return {
		type: RECENT_UPDATE_FETCH_SUCCESS,
		response,
	};
};

export const fetchRecentUpdatesError = (errorBody) => {
	return {
		type: RECENT_UPDATE_FETCH_ERROR,
		errorBody,
	};
};
