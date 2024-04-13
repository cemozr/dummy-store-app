import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FEE715FF",
    },
    secondary: {
      main: "#101820FF",
    },
    error: {
      main: "#f44336",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#101820FF",
          height: "100%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "#3F464C",
            top: "-2px",
            textShadow: "1px 1px 5px #FEE715FF",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: "#FEE715FF",
        },
        h6: {
          color: "#FEE715FF",
        },
      },
    },
  },
});
