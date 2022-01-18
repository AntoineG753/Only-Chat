import {combineReducers} from 'redux';
import userInfo from "./userInfo"


const rootReducer = combineReducers({
    user: userInfo
  });



export default rootReducer;
export type State = ReturnType<typeof rootReducer>