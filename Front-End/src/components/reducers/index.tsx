import {combineReducers} from 'redux';
import userInfo from "./userInfo"
import listUserConnected from './listConnected'
import SecretKey from './secretKey'

const rootReducer = combineReducers({
    user: userInfo,
    listUserConnected: listUserConnected,
    secretKey: SecretKey
  });



export default rootReducer;
export type State = ReturnType<typeof rootReducer>