import {combineReducers} from 'redux';
import userInfo from "./userInfo"
import listUserConnected from './listConnected'
import receivedMessages from './receivedMSG'
import clearMessage from './receivedMSG'

const rootReducer = combineReducers({
    user: userInfo,
    listUserConnected: listUserConnected,
    receivedMessage: receivedMessages,
    clearMessage: clearMessage
  });



export default rootReducer;
export type State = ReturnType<typeof rootReducer>