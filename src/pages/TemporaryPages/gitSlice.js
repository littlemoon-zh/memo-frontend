import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../util/api'

export const fetchIssues = createAsyncThunk('issues/fetchIssues', async () => {
  const {data} = await API.get('https://api.github.com/repos/littlemoon-zh/notes/issues/12/comments');
  const issues = data;
  return issues.map(item => {
    return {
      content: item['body'],
      time: item['created_at']
    }
  })
})


const initialState = {
  issues: [],
}

const issueSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.issues = action.payload
    })
  }
})


export default issueSlice.reducer;
