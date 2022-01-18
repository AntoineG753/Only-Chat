import { secretKey } from "./type_redux"
const initialState: object = {};



export default function SecretKey(state: object = initialState, action: secretKey) {
    switch (action.type) {
        case 'secretKey':
            return action.payload

        default: return state;
    }
}
