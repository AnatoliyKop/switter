import {combineReducers, legacy_createStore as createStore} from "redux";
import {userReducer} from "../reducers/userReducer.js";
import {statsReducer} from "../reducers/stasReducer.js";


const multyReducer=combineReducers({
    user:userReducer,
    stats:statsReducer
})

export const store=createStore(multyReducer);
