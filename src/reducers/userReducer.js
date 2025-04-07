import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/useAction.js";


const initialState = {
        name: "Monster ",
        avatar: 'https://gravatar.com/avatar/000?d=mp'
}
export const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, avatar: action.payload || state.user.avatar};
        case CHANGE_NAME:
            return {...state, name: action.payload || state.user.name};
        default:
            return state;
    }
}