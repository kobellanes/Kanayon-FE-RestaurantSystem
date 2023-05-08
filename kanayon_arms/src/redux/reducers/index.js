import { getMenuReducer, setAccountsReducer, setMenusReducer, setOrderReducer, setUserReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allUsers: setUserReducer,
    allMenus: setMenusReducer,
    getMenu: getMenuReducer,

    allOrders: setOrderReducer,

    allAccounts: setAccountsReducer,
});

export default reducers;