import { Action } from "./type_redux"
const initialState = {};



export default function userInfo(state: object = initialState, action: Action) {
    switch (action.type) {
        case 'get_userInfo':
            return action.payload

        default: return state;
    }
}


