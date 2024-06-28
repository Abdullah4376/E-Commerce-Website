import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
    userFeaturedImage: null,
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
        }
    }
});

export const {login, logout, addUserProfileImage, removeUserProfileImage} = productSlice.actions;

export default productSlice.reducer;