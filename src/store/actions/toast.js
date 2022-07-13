import { CLOSE_TOAST, SHOW_TOAST } from "../actionTypes";

export const showToast = (message, toastType, duration) => {
    return {
        type: SHOW_TOAST,
        message,
        toastType,
        duration,
    };
};

export const closeToast = () => {
    return {
        type: CLOSE_TOAST,
    };
};
