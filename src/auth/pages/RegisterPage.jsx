import { useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe tener un formato apropiado.'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 caracteres.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
}

// Creo el objeto validation form con los mismos campos que tiene el formData, y le paso un array, donde la primer posicion es la función de la validación, y el segundo valor es el mensaje de error

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const [formSubmitted, setFormSubmitted] = useState(false)

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === "checking", [status]);

  const { formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid }
    = useForm(formData, formValidations)


  const onsubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))
  }


  return (
    <Grid sx={{margin: 3}}>
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onsubmit}>
        <Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              color='secondary'
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              color='secondary'
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              color='secondary'
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button type='submit' variant="contained" fullWidth disabled={isCheckingAuthentication} color='secondary'>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Ya tenés una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
    </Grid>
  )
}

