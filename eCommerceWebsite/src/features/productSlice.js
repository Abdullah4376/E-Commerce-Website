import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
    userFeaturedImage: null,
    searchQuery: null
};

const productSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
        },

        addUserProfileImage : (state, action) => {
            state.userFeaturedImage = action.payload;
        },

        removeUserProfileImage: (state) => {
            state.userFeaturedImage = null;
        },

        search: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const {login, logout, addUserProfileImage, removeUserProfileImage, search} = productSlice.actions;

export default productSlice.reducer;