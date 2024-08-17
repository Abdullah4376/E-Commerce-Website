import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
    userFeaturedImage: null,
    searchQuery: null,
    brand: null,
};

const productSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            localStorage.setItem('userData', JSON.stringify(state.userData));
        },

        userBrandName: (state, action) => {
            state.brand = action.payload;
            localStorage.setItem('brand', JSON.stringify(state.brand))
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.searchQuery = null;
            state.brand = null;
            localStorage.clear();
        },

        addUserProfileImage : (state, action) => {
            state.userFeaturedImage = action.payload;
        },

        removeUserProfileImage: (state) => {
            state.userFeaturedImage = null;
        },

        search: (state, action) => {
            console.log('Search Successfull!');
            state.searchQuery = action.payload;
        }
    }
});

export const {login, logout, addUserProfileImage, removeUserProfileImage, search, userBrandName} = productSlice.actions;

export default productSlice.reducer;