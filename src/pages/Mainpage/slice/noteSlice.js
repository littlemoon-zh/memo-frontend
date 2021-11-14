import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../../util/api'

export const fetchNote = createAsyncThunk('notes/fetchNotes', async () => {
  const {data} = await API.get('api/notes', {headers: {'token': localStorage.getItem('token')}});
  const {code} = data;
  if (code === 200) {
    const {data: {notes}} = data;
    return notes || [];
  } else {
    return [];
  }
})

export const postNote = createAsyncThunk('notes/postNote', async (data) => {
  await API.post('api/note', data, {headers: {'token': localStorage.getItem('token')}});
})

const initialState = {
  status: 'idle',
  notes: [],
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchNote.fulfilled, (state, action) => {
      state.notes = action.payload
      // console.log('read finished')
    })

    builder.addCase(postNote.fulfilled, (state, action) => {

    })
  },

})


export default noteSlice.reducer;
