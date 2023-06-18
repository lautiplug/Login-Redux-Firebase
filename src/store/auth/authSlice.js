import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {

    login: (state, { payload }) => {
      state.status = 'authenticated'; // 'checking', 'not-authenticated', 'authenticated'
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },

    logout: (state, { payload }) => {
      state.status = 'not-authenticated'; // 'checking', 'not-authenticated', 'authenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },

    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
});
// Action creators are generated for each case reducer function
export const { increment, login, logout, checkingCredentials } = authSlice.actions;

// creo el Slice con los valores iniciales en initialState, creo los reducers login, logout y checkingCredentials(me servirá para poner la aplicacion en un estado de carga cuando se esté procesando alguna solicitud de login y así evitar dobles posteos y desactivar botones)
// también exporto las action creators functions de los reducers para tener un fácil acceso a ellas