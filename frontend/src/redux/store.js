import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slices/counterSlice.js'

export const store = configureStore({
    reducer : {
        user : userSlice
    }
})