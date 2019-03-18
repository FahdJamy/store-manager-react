import * as actionTypes from '../actions/actionsTypes';

const intialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    isAdmin: false,
    token: null
}

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_START:
            return {
                ...state,
                loading: true,
                error: null,
                isAuthenticated: false,
                isAdmin: false,
                token: null
            }
        case actionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.data,
                isAuthenticated: true
            }
        case actionTypes.LOGIN_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                isAdmin: false,
                token: null
            }
        case actionTypes.USER_IS_ADMIN:
            return {
                ...state,
                isAdmin: true
            }
        case actionTypes.LOGIN_USER_AGAIN:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                error: null,
                token: action.token
            }
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                loading: false,
                error: null,
                isAuthenticated: false,
                isAdmin: false,
                token: null
            }
        default:
            return state
    }
};

export default userReducer;
