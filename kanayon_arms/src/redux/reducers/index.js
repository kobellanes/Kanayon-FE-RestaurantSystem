import { getStockReducer, setAccountsReducer, setOrderReducer, setStockReducer, setUserReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allUsers: setUserReducer,
    allStocks: setStockReducer,
    getStock: getStockReducer,

    allOrders: setOrderReducer,

    allAccounts: setAccountsReducer,
});

export default reducers;