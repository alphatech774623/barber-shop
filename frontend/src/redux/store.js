import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/counterSlice.js'
import bookingSlice from './slices/bookingSlice.js';

export const store = configureStore({
    reducer : {
        user : userSlice,
        booking : bookingSlice
    }
})