import * as actionTypes from '../actions/actionsTypes';

const intialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null
}

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_START:
            return {
                ...state,
                loading: true,
                error: null
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
                error: action.error
            }
        default:
            return state
    }
};

export default userReducer;
