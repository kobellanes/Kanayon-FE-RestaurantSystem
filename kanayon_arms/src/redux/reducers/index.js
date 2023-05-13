import { getAccountReducer, getMenuReducer, getOrderReducer, setAccountsReducer, setMenusReducer, setOrdersReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allAccounts: setAccountsReducer,
    getAccount: getAccountReducer,

    allMenus: setMenusReducer,
    getMenu: getMenuReducer,


    allOrders: setOrdersReducer,
    getOrder: getOrderReducer,

});

export default reducers;