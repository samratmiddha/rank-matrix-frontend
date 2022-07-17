import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
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
      light: "#000000",
    }
  },
});

export const apiURL = "http://localhost:8000";

export const errorToastDuration = 2000


export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#6096FC',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));