import { combineReducers } from "redux";
import { messageReducer } from "./Message/messagesReducers";


const rootReducer = combineReducers({
    messageReducer: messageReducer,
})

export default rootReducer;