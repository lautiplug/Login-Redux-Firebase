import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#0077B6'
    },
    error: {
      main: red.A400
    }
  }
})
