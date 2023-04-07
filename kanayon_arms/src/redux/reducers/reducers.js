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