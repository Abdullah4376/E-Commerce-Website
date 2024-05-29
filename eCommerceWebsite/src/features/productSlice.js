import { createSlice, nanoid } from "@reduxjs/toolkit";


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
        userData: null
    }]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData
        },

        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login, logout} = productSlice.actions;

export default productSlice.reducer;