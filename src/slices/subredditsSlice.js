import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    subreddits: [],
    loading: false,
    error: null
};

//Thunk for Async Calls
export const fetchSubreddits = createAsyncThunk(
    'subreddit/fetchSubreddits', 
    async () => {
    try {
        const response = await fetch("https://www.reddit.com/reddits.json")
        const data = response.json();
        // console.log(data)
        return data;
    } catch (err) {
        throw Error(err);
    }
});

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        setSubreddits(state, action) {
            state.subreddits = action.payload;
        }        
    }, extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.subreddits.splice(0, 1, action.payload.data.children);
            state.loading = false;
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
});

//Selectors
export const subredditSelector = state => state.subreddits.subreddits[0];

//Exporting Action Creators and Reducer
export const { setSubreddits } = subredditsSlice.actions;
export default subredditsSlice.reducer;