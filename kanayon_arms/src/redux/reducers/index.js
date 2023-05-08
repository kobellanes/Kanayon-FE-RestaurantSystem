import { getAccountReducer, getMenuReducer, setAccountsReducer, setMenusReducer, setOrderReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allAccounts: setAccountsReducer,
    getAccount: getAccountReducer,

    allMenus: setMenusReducer,
    getMenu: getMenuReducer,


    allOrders: setOrderReducer,

});

export default reducers;