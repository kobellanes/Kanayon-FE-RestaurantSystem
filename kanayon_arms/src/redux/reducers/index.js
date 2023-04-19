import { getStockReducer, setStockReducer, setUserReducer } from "./reducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
    allUsers: setUserReducer,
    allStocks: setStockReducer,
    getStock: getStockReducer,
});

export default reducers;