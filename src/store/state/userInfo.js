import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId : null
}

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers:{
        setUser: (state, data) => {
            state.userId = data.id;
            state.name = data.name;
            state.country = data.country;
            state.transactions = data.transactions;
            state.roles = data.roles;
            state.img = "https://www.pngmart.com/files/22/User-Avatar-Profile-Background-Isolated-PNG.png";
        }
    }
})

export const { setUser } = userInfoSlice.actions;
export default userInfoSlice.reducer;
