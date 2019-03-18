import * as actionTypes from '../actions/actionsTypes';

const intialState = {
    registered: null,
    loading: false,
    error: null
}

const registerReducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER_STARTED:
            return {
                ...state,
                registered: null,
                loading: true,
                error: null
            }
        case actionTypes.REGISTER_USER_SUCCEEDED:
            return {
                ...state,
                loading: false,
                registered: action.data,
                error: null
            }
        case actionTypes.REGISTER_USER_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
                registered: null
            }
        default:
            return state
    }
};

export default registerReducer;
