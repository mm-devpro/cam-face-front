import {createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";


// SLICE
const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    url:""
  },
  reducers: {
    getFeedSuccess: (state, action) => {
      state.url = action.payload.url
    },
  },
});
//REDUCER
export default cameraSlice.reducer
// ACTIONS
const {getFeedSuccess} = cameraSlice.actions


export const getFeed = ({url}) => async dispatch => {
  try {
    const res = await api.get(`/api/v1/stream/${url}`, ).then(data => {
      if (data.status === 200) {
        return data
      }
    })
    dispatch(getFeedSuccess(res))
  } catch (e) {
    return console.error(e.message)
  }
}
