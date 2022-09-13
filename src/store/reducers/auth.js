import {createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";

const initialUser = {
  email: "",
  username: "",
  role: "",
  access: "",
}

// SLICE
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: initialUser,
    isLoggedIn: false,
    isInAdmin: null,
    message: "",
    status: "",
  },
  reducers: {
    loginSuccess: (state, action) => {
      let {message, status, user} = action.payload
      state.user = user;
      state.message = message;
      state.status = status;
      if (state.status === "success") {
        state.isLoggedIn = true
      }
    },
    logoutSuccess: (state, action) => {
      let {message, status} = action.payload
      state.user = initialUser;
      state.message = message;
      state.status = status;
      state.isLoggedIn = false
    },
  },
});
//REDUCER
export default authSlice.reducer
// ACTIONS
const {loginSuccess, logoutSuccess} = authSlice.actions


export const login = ({email, password}) => async dispatch => {
  try {
    await api.post('/cam-api/v1/login', {email, password}).then(data => {
      if (data.status === 200) {
        return dispatch(loginSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}

export const logout = () => async dispatch => {
  try {
    const res = await api.post('/cam-api/v1/logout').then(data => data.data)
    dispatch(logoutSuccess(res))
  } catch (e) {
    return console.error(e.message)
  }
}

