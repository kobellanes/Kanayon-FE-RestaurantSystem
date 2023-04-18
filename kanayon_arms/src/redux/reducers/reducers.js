import { ActionTypes } from "../constants/action-types"

const userInitialState = {
    users: [
        {
            id: 1,
            user_name: "Juan Dela Cruz",
            isBan: 0,
        },
        {
            id: 1,
            user_name: "Manny Pacquiao",
            isBan: 0,
        }
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