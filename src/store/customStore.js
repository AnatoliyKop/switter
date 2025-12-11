import {legacy_createStore as createStore} from "redux";


import {twitterReducer} from "./redusers/twitterReducer.js";

const initialState={
    user:{
        name:"Monster",
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats:{
        followers:10,
        following:10
    }
}
export const customStore= createStore(twitterReducer,initialState)

