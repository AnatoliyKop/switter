import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions.js";
import {CHANGE_STATS} from "../actions/statsAction.js";

export const twitterReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {...state, user: {...state.user, avatar: action.payload || state.user.avatar}}
        case CHANGE_NAME:
            return {...state, user: {...state.user, name: action.payload || state.user.name}}
        case CHANGE_STATS: {
            const res = state.stats[action.payload.typeStatus] + action.payload.sum
            console.log(res)
            const stats= {...state.stats,[action.payload.typeStatus]:res>=0?res:0}
            return {
                ...state,stats
            }
        }
        default:
            return state
    }
}