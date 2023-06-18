import { GitHub, LinkedIn, LogoutOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";
import { mailTo } from "../../utils/mailTo";

export const IntroductionMessage = () => {

  const { displayName } = useSelector( state => state.auth );

  const handleClick = mailTo()

  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(startLogout())
  }

  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '4' }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3} sx={{ width: { sm: 450 }, backgroundColor: 'white', padding: 3, borderRadius: 2, margin: 3 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>Welcome {displayName || 'dear user'}.</Typography>
        <p>Thanks for using my app; this site is being built. At the moment, you can test the login section, if you want to contribute, please send me a message <a onClick={handleClick}>here.</a> Or: </p>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button href="https://www.linkedin.com/in/emir-lautaro-pintos-848463255/" target="_blank" variant="contained" fullWidth color='secondary'>
              Linkedin
              <LinkedIn sx={{ml: 2}}/>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button href="https://github.com/lautiplug" target="_blank" variant="contained" fullWidth color='secondary'>
              Github
              <GitHub sx={{ml: 2}}/>
            </Button>
          </Grid>
        </Grid>
          <IconButton color="secondary" onClick={onLogout}>
            <LogoutOutlined/>
            Logout
          </IconButton>
      </Grid>
    </Grid>
  )
}