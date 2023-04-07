import { setUserReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allUsers: setUserReducer,
});

export default reducers;