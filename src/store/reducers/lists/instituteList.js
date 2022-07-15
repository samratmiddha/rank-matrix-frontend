import produce from "immer";
import {
  FETCH_INSTITUTE_LIST,
  FETCH_INSTITUTE_LIST_ERROR,
  FETCH_INSTITUTE_LIST_SUCCESS,
} from "../../actionTypes";

export const initialState = {
  instituteList: {
    loading: false,
    error: false,
    data: [],
    total_pages: 0,
  },
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_INSTITUTE_LIST:
        draft.instituteList.loading = true;
        draft.instituteList.error = false;
        draft.instituteList.data = [];
        break;
      case FETCH_INSTITUTE_LIST_SUCCESS:
        console.log(action.response)
        draft.instituteList.loading = false;
        draft.instituteList.error = false;
        draft.instituteList.data = action.response.data.results;
        draft.instituteList.total_pages = action.response.data.total_pages
        break;
      case FETCH_INSTITUTE_LIST_ERROR:
        draft.instituteList.loading = false;
        draft.instituteList.error = true;
        draft.instituteList.data = [];
        break;
      default:
        break;
    }
  });

export default reducer;
