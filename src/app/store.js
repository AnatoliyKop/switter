import {configureStore} from "@reduxjs/toolkit";
import userReducer from"../feauters/user/userSlice.js"
import statsReducer from "../feauters/stats/statsSlice.js";

export const store=configureStore({
    reducer:{
        user:userReducer,
        stats:statsReducer
    }
})