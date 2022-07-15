import { createTheme } from "@mui/material/styles";

export const websiteName = "GoSOCE";

export const customtheme = createTheme({
  palette: {
    primary: {
      main: "#6096FC",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#6096fc",
      light: "#6096fc",
      contrastText: "#ffffff",
    },
    black: {
      main: "#000000",
      contrastText: "#ffffff",

    }
  },
});

export const apiURL = "http://localhost:8000";

export const errorToastDuration = 2000