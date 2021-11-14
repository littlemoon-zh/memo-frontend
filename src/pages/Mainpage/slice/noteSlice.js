import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../../util/api'
import {useHistory} from "react-router-dom";

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

export const postNote = createAsyncThunk('notes/postNote', async (postdata) => {
  const {data} = await API.post('api/note', postdata, {headers: {'token': localStorage.getItem('token')}});
  return data.data;
})

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
  await API.delete(`api/note/${id}`, {headers: {'token': localStorage.getItem('token')}})
})

const initialState = {
  status: 'idle',
  notes: [],
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    frontDeleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note._id != action.payload)
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNote.fulfilled, (state, action) => {
      state.notes = action.payload
    }).addCase(postNote.fulfilled, (state, action) => {
      state.notes.unshift(action.payload)
    })
  },
})

export const {frontDeleteNote} = noteSlice.actions

export default noteSlice.reducer;
