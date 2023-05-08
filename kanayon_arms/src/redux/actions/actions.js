import { ActionTypes } from "../constants/action-types"

export const setUsers = (users) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    };
}

export const setMenus = (menus) => {
    return {
        type: ActionTypes.SET_MENUS,
        payload: menus,
    };
}

export const getMenu = (menu) => {
    return {
        type: ActionTypes.GET_MENU,
        payload: menu,
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