import produce from "immer";
import { NEW_UPDATE_FETCH, NEW_UPDATE_FETCH_ERROR, NEW_UPDATE_FETCH_SUCCESS } from "../actionTypes";

export const initialState = {
  newUpdate: {
    loading: false,
    error: false,
    data: [],
  },
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case NEW_UPDATE_FETCH:
        draft.newUpdate.loading = true;
        draft.newUpdate.error = false;
        draft.newUpdate.data = [];
        break;
      case NEW_UPDATE_FETCH_SUCCESS:
        draft.newUpdate.loading = false;
        draft.newUpdate.error = false;
        draft.newUpdate.data = action.response.data;
        break;
      case NEW_UPDATE_FETCH_ERROR:
        draft.newUpdate.loading = false;
        draft.newUpdate.error = true;
        draft.newUpdate.data = [];
        break;
      default:
        break;
    }
  });

export default reducer;
