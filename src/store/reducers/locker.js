import {createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";

const initialLocker = {
  name: "",
  access_lvl: "0",
  type: "door",
  locked: true,
  digit_activation: true
}

// SLICE
const lockerSlice = createSlice({
  name: 'locker',
  initialState: {
    lockers: [],
    curr_locker: initialLocker,
    message: "",
    status: "",
  },
  reducers: {
    getLockersSuccess: (state, action) => {

    },
    postLockerSuccess: (state, action) => {

    },
    updateLockerSuccess: (state, action) => {

    },
    deleteLockerSuccess: (state, action) => {

    },
  },
});
//REDUCER
export default lockerSlice.reducer
// ACTIONS
const {
  getLockersSuccess,
  postLockerSuccess,
  updateLockerSuccess,
  deleteLockerSuccess
} = lockerSlice.actions

export const postLocker = (data, locker_id=null) => async dispatch => {
  try {
    await api.post('/cam-api/v1/locker', data).then(data => {
      if (data.status === 200) {
        return dispatch(postLockerSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}

export const getLockers = (locker_id=null) => async dispatch => {
  try {
    await api.get('/cam-api/v1/locker').then(data => {
      if (data.status === 200) {
        return dispatch(getLockersSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}

export const updateLocker = (data, locker_id=null) => async dispatch => {
  try {
    await api.put('/cam-api/v1/locker', {
      params: {
        locker_id: locker_id
      },
      data: data
    }).then(data => {
      if (data.status === 200) {
        return dispatch(updateLockerSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}

export const deleteLocker = (locker_id) => async dispatch => {
  try {
    await api.delete('/cam-api/v1/locker', {
      params: {
        locker_id: locker_id
      },
    }).then(data => {
      if (data.status === 200) {
        return dispatch(deleteLockerSuccess(data.data))
      }
    })
  } catch (e) {
    return console.error(e.message)
  }
}


