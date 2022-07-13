import { combineReducers } from "redux";
import dashboard from './dashboard'
import toast from './toast'

const rootReducer = combineReducers({
    dashboard,
    toast,
});

export default rootReducer;
