import { ActionTypes } from "../constants/action-types"

export const setUsers = (users) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    };
}

export const setStocks = (stocks) => {
    return {
        type: ActionTypes.SET_STOCKS,
        payload: stocks,
    };
}

export const getStock = (stock) => {
    return {
        type: ActionTypes.GET_STOCK,
        payload: stock,
    };
}

export const setOrders = (orders) => {
    return {
        type: ActionTypes.SET_ORDERS,
        payload: orders,
    };
}

export const setAccounts = (accounts) => {
    return {
        type: ActionTypes.SET_ACCOUNTS,
        payload: accounts,
    }
}