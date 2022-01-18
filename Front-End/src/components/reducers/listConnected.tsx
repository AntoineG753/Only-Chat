import { receiveListConnected } from "./type_redux"
const initialState: any[] = [];



export default function userInfo(state: object = initialState, action: receiveListConnected) {
    switch (action.type) {
        case 'receiveListConnected':
            return action.payload

        default: return state;
    }
}
