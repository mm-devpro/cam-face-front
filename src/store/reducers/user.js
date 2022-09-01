import {createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";

const initialUser = {
  email: "",
  password: "",
  username: "",
  role: "",
  access: "",
}

// SLICE
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
    message: "",
    status:"",
  },
  reducers: {
    loginSuccess: (state, action) => {
      let {message, status, user} = action.payload
      state.user = user;
      state.message = message;
      state.status = status;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});
//REDUCER
export default userSlice.reducer
// ACTIONS
const {loginSuccess, logoutSuccess} = userSlice.actions


export const login = ({email, password}) => async dispatch => {
  try {
    const res = await api.post('/api/v1/login', {email, password}).then(data => {
      if (data.status === 200) {
        return data.data
      }
    })

    dispatch(loginSuccess(res))

  } catch (e) {
    return console.error(e.message)
  }
}

export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/v1/logout')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message)
  }
}

