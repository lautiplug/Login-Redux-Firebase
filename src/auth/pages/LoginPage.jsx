import { useMemo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {
  displayName: '',
  email: '',
  password: ''
}

export const LoginPage = () => {

  const dispatch = useDispatch()

  const {status, errorMessage} = useSelector(state => state.auth)

  const { email, password, onInputChange } = useForm(formData)

  const isAuthenticating = useMemo(() => status === "checking", [status])

  const onSubmit = ( e ) => {
    e.preventDefault();
    /* console.log({email, password}) */
    dispatch(startLoginWithEmailPassword({email, password}))
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField color='secondary' label="Correo" type="email" placeholder="correo@correo.com" fullWidth name='email' value={email} onChange={onInputChange }/>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField color='secondary' label="Contraseña" type="password" placeholder="contraseña" fullWidth name='password' value={password} onChange={onInputChange } />
          </Grid>

          <Grid item xs={12} sx={{mt: 3}} sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth color='secondary'>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSignIn} color='secondary'>
                <Google />
                <Typography variant="p" sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>No tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Creá una
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
