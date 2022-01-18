import { GetInfoUser } from "./type_redux"
const initialState: object = {};



export default function userInfo(state: object = initialState, action: GetInfoUser) {
    switch (action.type) {
        case 'get_userInfo':
            return action.payload

        default: return state;
    }
}


