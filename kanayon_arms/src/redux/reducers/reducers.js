import { ActionTypes } from "../constants/action-types"

const userInitialState = {
    users: [
        {
            id: 1,
            user_name: "Khenn Kobe",
            email_add: "khennkobe@gmail.com",
            gcash_num: "09934726287",
            address: "Brgy. Ilog, Sto. Tomas, Batangas",
            isBan: 0,
        },
        {
            id: 1,
            user_name: "Kyla Ciara",
            email_add: "kylaciara@gmail.com",
            gcash_num: "09998867891",
            address: "Brgy. Looban, Tanauan City, Batangas",
            isBan: 0,
        },
        {
            id: 1,
            user_name: "Sky Lucido",
            email_add: "skyers@gmail.com",
            gcash_num: "09164261711",
            address: "Brgy. Bangag, Tanauan City, Batangas",
            isBan: 0,
        },
        {
            id: 1,
            user_name: "Monique Aira",
            email_add: "moniqueaira@gmail.com",
            gcash_num: "09557265172",
            address: "Brgy. Puyat, Tanauan City, Batangas",
            isBan: 0,
        },
        {
            id: 1,
            user_name: "Lomi House",
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

const stockInitialState = {
    stocks: [
        {
            id: 1,
            stock_name: "Paa Inasal",
            stock_price: "90",
            isEdit: 0,
            isSold: 0,
        },
        {
            id: 1,
            stock_name: "Pecho Inasal",
            stock_price: "90",
            isEdit: 0,
            isSold: 0,
        }
    ]
}

export const setStockReducer = (state = stockInitialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_STOCKS:
            return { ...state, stocks: payload };
        default:
            return state;
    }
}

export const getStockReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_STOCK:
            return { ...state, ...payload };
        default:
            return state;
    }
}