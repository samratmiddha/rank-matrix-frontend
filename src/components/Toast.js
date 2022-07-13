import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { closeToast } from "../store/actions/toast";
import { makeSelectShowToast } from "../store/selectors/toast";

const Toast = ({ toastObj, closeErrorToastComponent }) => {
    const [open, setopen] = useState(false)
    const handleClose = (event) => {
        closeErrorToastComponent()
    };

    useEffect(() => {
        setopen(toastObj.open)
    }, [toastObj]);

    return (
        <Snackbar open={open} autoHideDuration={toastObj.duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toastObj.type} sx={{ width: "100%" }}>
            {toastObj.message}
        </Alert>
        </Snackbar>
    );
};

const mapStateToProps = (state) => {
  return {
    toastObj: makeSelectShowToast(state),
  };
};

const mapDispatchToProps = (dispatch) => {
    return{
        closeErrorToastComponent: () => dispatch(closeToast())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
