import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#CAF0F8'
    },
    secondary: {
      main: '#0077B6'
    },
    error: {
      main: red.A400
    }
  }
})
