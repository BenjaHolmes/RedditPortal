  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

  const initialState = {
      posts: [],
      subreddit: '/r/popular',
      loading: false,
      error: null
  };
  
//Thunk for Async Calls
export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles', 
    async (sub) => {
    try { 
        const response = await fetch(`https://www.reddit.com`+ sub + `.json`)
        const data = response.json();
        return data;
        
    } catch (err) {
        throw Error(err);
    }
})

const articlesSlice = createSlice({
      name: 'articles',
      initialState,
      reducers: {
          setPosts(state, action) {
              state.posts = action.payload;
          },
          setSearch(state, action) {
            state.searchTerm = action.payload;
          },
          setSubreddit(state, action) {
            state.subreddit = action.payload;
          }
      },
      extraReducers: {
        [fetchArticles.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchArticles.fulfilled]: (state, action) => {
            state.posts.splice(0, 1, action.payload.data.children);
            state.loading = false;
        },
        [fetchArticles.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        }
      }
  })
  
//Selectors
export const postSelector = state => state.articles.posts[0];
export const searchTermSelector = state => state.articles.searchTerm;
export const subSelector = state => state.articles.subreddit;
  
//Exporting Action Creators and Reducer
export const { setPosts, setSearch, setSubreddit } = articlesSlice.actions;
export default articlesSlice.reducer;