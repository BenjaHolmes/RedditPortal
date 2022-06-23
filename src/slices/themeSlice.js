import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: 'Dark'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode(state, action) {
            if(state.theme === 'Dark') {
                state.theme = 'Light';
                
            } else {
                state.theme = 'Dark';
            }
        }
    }
})

export const themeSelector = state => state.theme.theme;
export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;


