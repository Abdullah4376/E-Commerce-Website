import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: false,
    userData: null,
    userFeaturedImage: '',
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
            localStorage.setItem('userData', JSON.stringify(action.payload));
        },

        userBrandName: (state, action) => {
            state.brand = action.payload;
            localStorage.setItem('brand', JSON.stringify(action.payload))
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
            localStorage.setItem('userFeaturedImage', state.userFeaturedImage);
        },

        removeUserProfileImage: (state) => {
            state.userFeaturedImage = '';
            localStorage.removeItem('userFeaturedImage');
        },

        search: (state, action) => {
            console.log('Search Successfull!');
            state.searchQuery = action.payload;
        }
    }
});

export const {login, logout, addUserProfileImage, removeUserProfileImage, search, userBrandName} = productSlice.actions;

export default productSlice.reducer;