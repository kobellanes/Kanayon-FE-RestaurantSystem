import { ActionTypes } from "../constants/action-types"

const accountsInitialState = {
    accounts: [

    ]
}

export const setAccountsReducer = (state = accountsInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ACCOUNTS:
            return { ...state, accounts: payload };
        default:
            return state;
    }
}


export const getAccountReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ACCOUNT:
            return { ...state, ...payload };
        default:
            return state;
    }
}


const menuInitialState = {
    menus: [

    ]
}

export const setMenusReducer = (state = menuInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MENUS:
            return { ...state, menus: payload };
        default:
            return state;
    }
}


export const getMenuReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_MENU:
            return { ...state, ...payload };
        default:
            return state;
    }
}


const ordersInitialState = {
    orders: [

    ]
}

export const setOrdersReducer = (state = ordersInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ORDERS:
            return { ...state, orders: payload };
        default:
            return state;
    }
}

export const getOrderReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_ORDER:
            return { ...state, ...payload };
        default:
            return state;
    }
}
