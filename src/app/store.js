import {configureStore} from "@reduxjs/toolkit";
import user from "../feauters/user/userSlice.js"
import stats from "../feauters/stats/statsSlice.js"

export const store= configureStore({
    reducer: {
        user,
        stats    }
})