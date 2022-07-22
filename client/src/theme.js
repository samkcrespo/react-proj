import { createTheme } from "@mui/material/styles";
//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#011d27",
    },
    secondary: {
      main: "#4fa833",
    },
    info: {
      main: "#4fa833",
    },
    background: {
      paper: "#fafcfe",
      default: "#323742",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    success: {
      main: "#4caf50",
    },
    divider: "rgba(0,0,0,0.14)",
  },
  typography: {
    fontFamily: "Roboto",
    button: {
      fontWeight: 700,
      lineHeight: 2.04,
      fontFamily: "Montserrat",
    },
    caption: {
      fontSize: "0.8rem",
      fontFamily: "Montserrat",
    },
    overline: {
      fontSize: "0.7rem",
      fontFamily: "Montserrat",
    },
    body2: {
      fontSize: "0.9rem",
      fontFamily: "Hind Madurai",
    },
    body1: {
      fontSize: "1.1rem",
      fontFamily: "Hind Madurai",
    },
    subtitle2: {
      fontSize: "1rem",
      fontFamily: "Montserrat",
    },
    subtitle1: {
      fontSize: "1rem",
      fontFamily: "Montserrat",
    },
    h6: {
      fontSize: "1.1rem",
      fontFamily: "Montserrat",
    },
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
  },
  props: {
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
  },
  shape: {
    borderRadius: 4,
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
});

export default theme;
