import { getStockReducer, setOrderReducer, setStockReducer, setUserReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allUsers: setUserReducer,
    allStocks: setStockReducer,
    getStock: getStockReducer,

    allOrders: setOrderReducer,
});

export default reducers;