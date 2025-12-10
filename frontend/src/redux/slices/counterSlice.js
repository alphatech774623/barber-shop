import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        logoutUser: (state) => {
            state.userInfo = null;
        }
    }
})

export const { setUserInfo, logoutUser } = userSlice.actions;
export default userSlice.reducer;
