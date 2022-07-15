import { combineReducers } from "redux";
import dashboard from './dashboard'
import toast from './toast'
import formData from './form'
import list from './list'

const rootReducer = combineReducers({
    dashboard,
    toast,
    formData,
    list,
});

export default rootReducer;