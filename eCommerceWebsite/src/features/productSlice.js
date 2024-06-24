import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
    userProfileImage: null
};

const productSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
            state.userProfileImage = action.payload.userProfileImage;
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.userProfileImage = null;
        }
    }
});

export const {login, logout} = productSlice.actions;

export default productSlice.reducer;