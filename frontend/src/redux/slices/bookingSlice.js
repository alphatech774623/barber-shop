import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        bookingInfo: null,
    },
    reducers: {
        setBookingInfo: (state, action) => {
            state.bookingInfo = action.payload;
        }
    }
})

export const { setBookingInfo } = bookingSlice.actions;
export default bookingSlice.reducer;
