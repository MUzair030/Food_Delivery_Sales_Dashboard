import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./state/theme";
import userInfoReducer from "./state/userInfo";
import { userApi } from "./api/userApi";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        userInfo: userInfoReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(userApi.middleware)

})