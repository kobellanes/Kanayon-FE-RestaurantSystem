import { getStockReducer, setAdminReducer, setOrderReducer, setStockReducer, setUserReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allUsers: setUserReducer,
    allStocks: setStockReducer,
    getStock: getStockReducer,

    allOrders: setOrderReducer,

    allAdmin: setAdminReducer,
});

export default reducers;