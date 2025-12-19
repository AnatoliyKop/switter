import {createSlice} from "@reduxjs/toolkit";
import {AVATAR_BASE_URL} from "../../util/constant.js";

 const userSlice= createSlice({
    name:"user",
    initialState:{
        name:"Monster",
        avatar:AVATAR_BASE_URL+"monsterid"
    },
    reducers:{
        changeName:(state,action)=>{
            state.name=action.payload||state.name
        },
        changeAvatar:(state,action)=>{
            state.avatar=action.payload?AVATAR_BASE_URL+action.payload:state.avatar
        }

    }
})
export default userSlice.reducer
export const {changeName,changeAvatar}=userSlice.actions