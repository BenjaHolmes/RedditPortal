import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    originalPost: [],
    selectedThread: null,
    loading: false,
    error: null
};



//Thunk for Async Calls
export const fetchComments = createAsyncThunk(
    'thread/fetchComments', 
    async (thread) => {
    //try {
        const response = await fetch(`https://www.reddit.com${thread}.json`)
        const data = response.json();
        // console.log(data)
        return data;
    //} catch (err) {
        //throw Error(err);
    //}
})

const threadSlice = createSlice({
    name: 'thread',
    initialState,
    reducers: {
        setComments(state, action) {
            state.comments = action.payload;
        },
        setSelectedThread(state, action) {
          state.selectedThread = action.payload;
        }
    }, extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.loading = false;
            state.originalPost = action.payload[0].data.children[0].data;
            state.comments = action.payload[1].data.children.map(comment => {
                    return ({
                        author: comment.data.author,
                        body: comment.data.body,
                        replies: comment.data.replies,
                        upvotes: comment.data.upvotes,
                    })
            });
        }
        },
        [fetchComments.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
    }
)

//Selectors
export const threadSelector = state => state.thread.selectedThread;
export const originalPostSelector = state => state.thread.originalPost;
export const commentsSelector = state => state.thread.comments;
export const selectLoading = state => state.thread.loading;

//Exporting Action Creators and Reducer
export const { setSelectedThread } = threadSlice.actions;
export default threadSlice.reducer;