import {
  CircularProgress,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import "./index.scss";

export const Header = ({ heading, dropDownList, setValue }) => {
  const loading =
    dropDownList.loading ||
    (dropDownList.data.length == 0 && !dropDownList.error);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="header-container">
      <Container className="header-content">
        <Typography variant="h4" component="h2">
          {heading}
        </Typography>
        {loading ? (
          <CircularProgress color="black" />
        ) : (
          !dropDownList.error && (
            <>
              <Select defaultValue={"IIT"} onChange={handleChange}>
                {dropDownList.data.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </>
          )
        )}
      </Container>
    </div>
  );
};
