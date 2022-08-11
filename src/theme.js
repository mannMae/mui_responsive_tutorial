import { createTheme } from "@mui/material/styles";
import { blue, pink, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: { main: blue[700] },
    secondary: {
      main: pink[500],
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
  LogoLg: {},
  LogoSm: {},
});
