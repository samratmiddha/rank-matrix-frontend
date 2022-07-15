import produce from "immer";
import { FETCH_INSTITUTE_TYPE, FETCH_INSTITUTE_TYPE_ERROR, FETCH_INSTITUTE_TYPE_SUCCESS, FETCH_YEAR, FETCH_YEAR_ERROR, FETCH_YEAR_SUCCESS } from "../actionTypes";

export const initialState = {
  institutes: {
    loading: false,
    error: false,
    data: [],
  },
  year: [],
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_INSTITUTE_TYPE:
          draft.institutes.loading = true
          draft.institutes.error = false
          draft.institutes.data = []
          break;
      case FETCH_INSTITUTE_TYPE_SUCCESS:
          draft.institutes.loading = false
          draft.institutes.error = false
          draft.institutes.data = action.response.data
          break;
      case FETCH_INSTITUTE_TYPE_ERROR:
          draft.institutes.loading = false
          draft.institutes.error = true
          draft.institutes.data = []
          break;
      case FETCH_YEAR:
        draft.year = []
        break;
      case FETCH_YEAR_SUCCESS:
        draft.year = action.response.data
        break;
      case FETCH_YEAR_ERROR:
        draft.year = []
        break;
      default:
          break;
    }
  });

export default reducer;
