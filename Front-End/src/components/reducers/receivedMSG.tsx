import { receivedMessage, clearMessage } from "./type_redux"
const initialState: any = [];



export default function receivedMessages(state: any = initialState, action: receivedMessage | clearMessage) {
    switch (action.type) {
        case 'receivedMessage':
            return [...state, action.payload]
        case 'clearMessage':
            return [initialState]

        default: return state;
    }
}
