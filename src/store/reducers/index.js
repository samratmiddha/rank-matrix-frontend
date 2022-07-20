import { combineReducers } from "redux";
import dashboard from './dashboard'
import toast from './toast'
import formData from './form'
import list from './list'
import prediction from './prediction'

const rootReducer = combineReducers({
    dashboard,
    toast,
    formData,
    list,
    prediction,
});

export default rootReducer;