import { ActionTypes } from "../constants/action-types"

const userInitialState = {
    users: [
        {
            id: 1,
            user_name: "Khenn Kobe Llanes",
            email_add: "khennkobe@gmail.com",
            gcash_num: "09934726287",
            address: "Brgy. San Vicente, Sto. Tomas, Batangas",
            isBan: 0,
        },
        {
            id: 2,
            user_name: "Kyla Ciara Austria",
            email_add: "kylaciara@gmail.com",
            gcash_num: "09998867891",
            address: "Brgy. Darasa, Tanauan City, Batangas",
            isBan: 0,
        },
        {
            id: 3,
            user_name: "Sky Lucido",
            email_add: "skyers@gmail.com",
            gcash_num: "09164261711",
            address: "Brgy. Natatas, Tanauan City, Batangas",
            isBan: 0,
        },
        {
            id: 4,
            user_name: "Monique Aira Desengano",
            email_add: "moniqueaira@gmail.com",
            gcash_num: "09557265172",
            address: "Brgy. Pagaspas, Tanauan City, Batangas",
            isBan: 0,
        },
        {
            id: 5,
            user_name: "Lomi House atbp.",
            email_add: "lomian@gmail.com",
            gcash_num: "772-5643",
            address: "Brgy. Santolan, Tanauan City, Batangas",
            isBan: 0,
        },
    ]
}

export const setUserReducer = (state = userInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return { ...state, users: payload };
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

const orderInitialState = {
    orders: [
        {
            id: 1,
            user_name: "Khenn Kobe Llanes",
            gcash_num: "09999999999",
            order_num: 1,
            quantity: 2,
            isStatus: 0,
        },
        {
            id: 2,
            user_name: "Kobe Pogi Llanes",
            gcash_num: "12345678910",
            order_num: 2,
            quantity: 3,
            isStatus: 1,
        },
        {
            id: 3,
            user_name: "Pogi Ako sobra",
            gcash_num: "10987654321",
            order_num: 3,
            quantity: 1,
            isStatus: 2,
        },
    ]
}

export const setOrderReducer = (state = orderInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ORDERS:
            return { ...state, orders: payload };
        default:
            return state;
    }
}

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