import {createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";


// SLICE
const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    url:"",
    frame: null
  },
  reducers: {
    getFeedSuccess: (state, action) => {
      console.log(action.payload)
    },
  },
});
//REDUCER
export default cameraSlice.reducer
// ACTIONS
const {getFeedSuccess} = cameraSlice.actions


export const getFeed = (url) => async dispatch => {
  try {
    const res = await api.get(`/cam-api/v1/stream/${url}`, ).then(data => {
      if (data.status === 200) {
        console.log(data.data)
        return data.data
      }
    })
    dispatch(getFeedSuccess(res))
  } catch (e) {
    return console.error(e.message)
  }
}
