import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../../util/api'

export const fetchNote = createAsyncThunk('notes/fetchNotes', async () => {
    const { data } = await API.get('api/notes', { headers: { 'token': localStorage.getItem('token') } });
    const { code } = data;
    if (code === 200) {
        const { data: { notes } } = data;
        console.log(notes);
        return notes || [];
    } else {
        return [];
    }
})

export const postNote = createAsyncThunk('notes/postNote', async () => {
    const { data } = await API.post('api/note', { headers: { 'token': localStorage.getItem('token') } });
    const { code } = data;
    if (code === 200) {
        const { data: { note } } = data;
        return note || [];
    } else {
        return [];
    }
})

const initialState = {
    status: 'idle',
    notes: [],
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(fetchNote.fulfilled, (state, action) => {
            state.notes = action.payload
        })
    }
})


export default noteSlice.reducer;
