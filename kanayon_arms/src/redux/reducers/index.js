import { getAccountReducer, getMenuReducer, setAccountsReducer, setMenusReducer, setOrdersReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allAccounts: setAccountsReducer,
    getAccount: getAccountReducer,

    allMenus: setMenusReducer,
    getMenu: getMenuReducer,


    allOrders: setOrdersReducer,

});

export default reducers;