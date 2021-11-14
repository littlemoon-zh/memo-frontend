import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import API from "../../../util/api";
import {useHistory} from "react-router-dom";
export const userLogin = createAsyncThunk('user/login', async ({username, password}) => {
  const {data} = await API.post('/login', JSON.stringify({
    username,
    password
  }), {headers: {'Content-Type': 'application/json'}})
  return data;
})

const initialState = {
  username: '',
  token: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserInfo: (state, action) => {
      state.username = '';
      state.token = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      const response = action.payload;
      if (response.code === 200) {
        state.username = response.data.username;
        state.token = response.data.token;
        localStorage.setItem('token', state.token);
      }
    })
  }
})

export default userSlice.reducer