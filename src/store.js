import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';
import articleReducer from './slices/articlesSlice';
import threadReducer from './slices/threadSlice';
import subredditsReducer from './slices/subredditsSlice';

export const store = configureStore({
    reducer: {theme: themeReducer,
            articles: articleReducer,
            thread: threadReducer,
            subreddits: subredditsReducer}
})

