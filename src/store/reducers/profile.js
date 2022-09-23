import {createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";

const initialProfile = {
  name: "",
  surname: "",
  gender: "male",
  dob: "",
  encodings: "",
  val_num: 0,
  validated: "",
  group: "inv",
  password: "",
  access_lvl: "0"
}

// SLICE
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profiles: [],
    curr_profile: initialProfile,
    message: "",
    status: "",
  },
  reducers: {
    getProfilesSuccess: (state, action) => {

    },
    postProfileSuccess: (state, action) => {

    },
    updateProfileSuccess: (state, action) => {

    },
    deleteProfileSuccess: (state, action) => {

    },
  },
});
//REDUCER
export default profileSlice.reducer
// ACTIONS
const {
  getProfilesSuccess,
  postProfileSuccess,
  updateProfileSuccess,
  deleteProfileSuccess
} = profileSlice.actions

export const postProfile = (data, profile_id=null) => async dispatch => {
  try {
    await api.post('/cam-api/v1/profile', data).then(data => {
      if (data.status === 200) {
        return dispatch(postProfileSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}

export const getProfiles = (profile_id=null) => async dispatch => {
  try {
    await api.get('/cam-api/v1/profile').then(data => {
      if (data.status === 200) {
        return dispatch(getProfilesSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}

export const updateProfile = (data, profile_id=null) => async dispatch => {
  try {
    await api.put('/cam-api/v1/Profile', {
      params: {
        Profile_id: profile_id
      },
      data: data
    }).then(data => {
      if (data.status === 200) {
        return dispatch(updateProfileSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}

export const deleteProfile = (profile_id) => async dispatch => {
  try {
    await api.delete('/cam-api/v1/profile', {
      params: {
        Profile_id: profile_id
      },
    }).then(data => {
      if (data.status === 200) {
        return dispatch(deleteProfileSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}
