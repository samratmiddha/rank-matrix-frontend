import produce from "immer";
import {
  FETCH_INSTITUTE_TYPE,
  FETCH_INSTITUTE_TYPE_ERROR,
  FETCH_INSTITUTE_TYPE_SUCCESS,
  FETCH_YEAR,
  FETCH_YEAR_ERROR,
  FETCH_YEAR_SUCCESS,
  FETCH_ROUND,
  FETCH_ROUND_ERROR,
  FETCH_ROUND_SUCCESS,
  FETCH_CATEGORY,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_SUCCESS,
  FETCH_GENDER,
  FETCH_GENDER_ERROR,
  FETCH_GENDER_SUCCESS,
  FETCH_QUOTA,
  FETCH_QUOTA_ERROR,
  FETCH_QUOTA_SUCCESS,
  FETCH_INSTITUTE_FORM_LIST,
  FETCH_INSTITUTE_FORM_LIST_SUCCESS,
  FETCH_INSTITUTE_FORM_LIST_ERROR,
  FETCH_BRANCH_FORM_LIST,
  FETCH_BRANCH_FORM_LIST_SUCCESS,
  FETCH_BRANCH_FORM_LIST_ERROR,
  FETCH_BRANCH_ONE_ONE_LIST,
  FETCH_BRANCH_ONE_ONE_LIST_SUCCESS,
  FETCH_BRANCH_ONE_ONE_LIST_ERROR,
} from "../actionTypes";

export const initialState = {
  institutesType: {
    loading: false,
    error: false,
    data: [],
  },
  year: [],
  rounds: {
    loading: false,
    error: false,
    data: [],
  },
  gender: [],
  category: [],
  quota: {
    loading: false,
    error: false,
    data: [],
  },
  institutesList: {
    loading: false,
    error: false,
    data: [],
  },
  branchList: {
    loading: false,
    error: false,
    data: [],
  },
  branchOneOneList: {
    loading: false,
    error: false,
    data: [],
  },
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_INSTITUTE_TYPE:
        draft.institutesType.loading = true;
        draft.institutesType.error = false;
        draft.institutesType.data = [];
        break;
      case FETCH_INSTITUTE_TYPE_SUCCESS:
        draft.institutesType.loading = false;
        draft.institutesType.error = false;
        draft.institutesType.data = action.response.data;
        break;
      case FETCH_INSTITUTE_TYPE_ERROR:
        draft.institutesType.loading = false;
        draft.institutesType.error = true;
        draft.institutesType.data = [];
        break;
      case FETCH_YEAR:
        draft.year = [];
        break;
      case FETCH_YEAR_SUCCESS:
        draft.year = action.response.data;
        break;
      case FETCH_YEAR_ERROR:
        draft.year = [];
        break;
      case FETCH_ROUND:
        draft.rounds.loading = true;
        draft.rounds.error = false;
        draft.rounds.data = [];
        break;
      case FETCH_ROUND_SUCCESS:
        draft.rounds.loading = false;
        draft.rounds.error = false;
        draft.rounds.data = action.response.data;
        break;
      case FETCH_ROUND_ERROR:
        draft.rounds.loading = false;
        draft.rounds.error = true;
        draft.rounds.data = [];
        break;
      case FETCH_CATEGORY:
        draft.category = [];
        break;
      case FETCH_CATEGORY_SUCCESS:
        draft.category = action.response.data;
        break;
      case FETCH_CATEGORY_ERROR:
        draft.category = [];
        break;
      case FETCH_GENDER:
        draft.gender = [];
        break;
      case FETCH_GENDER_SUCCESS:
        draft.gender = action.response.data;
        break;
      case FETCH_GENDER_ERROR:
        draft.gender = [];
        break;
      case FETCH_QUOTA:
        draft.quota.loading = true;
        draft.quota.error = false;
        draft.quota.data = [];
        break;
      case FETCH_QUOTA_SUCCESS:
        draft.quota.loading = false;
        draft.quota.error = false;
        draft.quota.data = action.response.data;
        break;
      case FETCH_QUOTA_ERROR:
        draft.quota.loading = false;
        draft.quota.error = true;
        draft.quota.data = [];
        break;
      case FETCH_INSTITUTE_FORM_LIST:
        draft.institutesList.loading = true;
        draft.institutesList.error = false;
        draft.institutesList.data = [];
        break;
      case FETCH_INSTITUTE_FORM_LIST_SUCCESS:
        draft.institutesList.loading = false;
        draft.institutesList.error = false;
        draft.institutesList.data = action.response.data;
        break;
      case FETCH_INSTITUTE_FORM_LIST_ERROR:
        draft.institutesList.loading = false;
        draft.institutesList.error = true;
        draft.institutesList.data = [];
        break;
      case FETCH_BRANCH_FORM_LIST:
        draft.branchList.loading = true;
        draft.branchList.error = false;
        draft.branchList.data = [];
        break;
      case FETCH_BRANCH_FORM_LIST_SUCCESS:
        draft.branchList.loading = false;
        draft.branchList.error = false;
        draft.branchList.data = action.response.data;
        break;
      case FETCH_BRANCH_FORM_LIST_ERROR:
        draft.branchList.loading = false;
        draft.branchList.error = true;
        draft.branchList.data = [];
        break;
      case FETCH_BRANCH_ONE_ONE_LIST:
        draft.branchOneOneList.loading = true;
        draft.branchOneOneList.error = false;
        draft.branchOneOneList.data = [];
        break;
      case FETCH_BRANCH_ONE_ONE_LIST_SUCCESS:
        draft.branchOneOneList.loading = false;
        draft.branchOneOneList.error = false;
        draft.branchOneOneList.data = action.response.data;
        break;
      case FETCH_BRANCH_ONE_ONE_LIST_ERROR:
        draft.branchOneOneList.loading = false;
        draft.branchOneOneList.error = true;
        draft.branchOneOneList.data = [];
        break;
      default:
        break;
    }
  });

export default reducer;
