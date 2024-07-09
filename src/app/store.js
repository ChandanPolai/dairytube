import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";

export const store = configureStore({
    reducer: {
        
        auth:authSlice,
        user:userSlice,

    },
});

