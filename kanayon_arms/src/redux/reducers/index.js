import { getStockReducer, setAccountsReducer, setMenusReducer, setOrderReducer, setUserReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allUsers: setUserReducer,
    allMenus: setMenusReducer,
    getStock: getStockReducer,

    allOrders: setOrderReducer,

    allAccounts: setAccountsReducer,
});

export default reducers;