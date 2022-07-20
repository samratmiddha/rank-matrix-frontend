import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./index.scss";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { showToast } from "../../store/actions/toast";
import { toastDuration } from "../../constants/general";

export const YearRoundSelect = ({
  buttonText,
  formTitle,
  firstSelectLabel,
  secondSelectLabel,
  firstSelectList,
  secondSelectList,
  firstSelectOnChange,
  firstSelectValue,
  secondSelectOnChange,
  secondSelectValue,
  okClick,
}) => {
  const [open, setOpen] = useState(false);
  const [okAllowed, setokAllowed] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    okClick(false)
  }, [])
  

  const handleChange = (event) => {
    setokAllowed(true)
    const value = event.target.value
    secondSelectOnChange(value.charAt(value.length -1))
  };

  const handleChangeFirst = (event) => [
    firstSelectOnChange(event.target.value),
  ];

  const handleClickOpen = () => {
    setokAllowed(false)
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleOk = (event) => {
    if(okAllowed){
        okClick(true);
        setOpen(false);
    }else{
        dispatch(showToast('Select both institute and round', 'warning', toastDuration))
    }
  };

  return (
    <div className="dialog-container">
      <Button onClick={handleClickOpen}>{buttonText}</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{formTitle}</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>{firstSelectLabel}</InputLabel>
              <Select
                value={firstSelectValue}
                onChange={handleChangeFirst}
                input={<OutlinedInput label={firstSelectLabel} />}
              >
                {firstSelectList.map((item) => (
                  <MenuItem value={item}>JoSAA {item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>{secondSelectLabel}</InputLabel>
              <Select
              onChange={handleChange}
                input={<OutlinedInput label={secondSelectLabel} />}
              >
                {secondSelectList.loading ? (
                  <CircularProgress />
                ) : (
                  secondSelectList.data.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
