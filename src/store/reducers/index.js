import { combineReducers } from "redux";
import dashboard from './dashboard'
import toast from './toast'
import formData from './form'
import instituteList from './lists/instituteList'

const rootReducer = combineReducers({
    dashboard,
    toast,
    formData,
    instituteList,
});

export default rootReducer;