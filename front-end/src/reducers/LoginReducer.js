import {
    START_LOGIN,
    SUCCESS_LOGIN,
    FAILED_LOGIN
} from '../actions'

const initialState = {
    isLoggedIn: false,
    isLoggedOut: false,
    isFetching: false,
    errors: null,
    user: {}
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOGIN:
            return {
                ...state,
                isFetching: true,
                isLoggedIn: false,
                isLoggedOut: false,
                errors: null
            }
        case FAILED_LOGIN:
            return {
                ...state,
                isFetching: false,
                isLoggedIn: false,
                isLoggedOut: false,
                errors: action.payload
            }
        default: 
            return state;
    }
}