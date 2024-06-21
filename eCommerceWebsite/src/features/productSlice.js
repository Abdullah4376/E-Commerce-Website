import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [{
        title: '',
        color: [],
        quantity: 0,
        price: 500,
        productImages: [],
        stock: 0,
        description: '',
        brand: '',
        userID: '',
        id: '',
        status: false,
        userData: null,
        userProfileImage: null
    }]
};

const productSlice = createSlice({
    name: 'products',
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