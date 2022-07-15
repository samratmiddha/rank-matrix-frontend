import { Pagination } from "@mui/material";
import React from "react";
import "./index.scss";

export const CustomPagination = ({ totalPage, onChange, page }) => {
  
  return (
    <div className="custom-pagination-container">
      <Pagination count={totalPage} page={page} color="secondary" onChange={onChange} />
    </div>
  );
};
