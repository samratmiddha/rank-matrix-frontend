import produce from "immer";
import { toastDuration } from "../../constants/general";
import { CLOSE_TOAST, SHOW_TOAST } from "../actionTypes";

export const initialState = {
    toast: {
        open: false,
        message: "",
        type: 'error',
        duration: toastDuration,
    }
}

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
        case SHOW_TOAST:
            draft.toast.open = true
            draft.toast.message = action.message
            draft.toast.type = action.toastType
            draft.toast.duration = action.duration
            break;
        case CLOSE_TOAST:
            draft.toast.open = false
            draft.toast.message = ""
            break;
        default:
            break;
    }
});

export default reducer;
