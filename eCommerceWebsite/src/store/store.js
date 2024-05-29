import {configureStore} from '@reduxjs/toolkit';
import productSlice from '../features/productSlice';

export const store = configureStore({
    reducer: {
        auth: productSlice,
        // You can also add more slices
    }
})