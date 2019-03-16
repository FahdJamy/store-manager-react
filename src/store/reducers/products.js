import * as actionTypes from "../actions/actionsTypes";

const currentState = {
    products: null,
    error: null,
    loading: false
};

const productReducer = (state = currentState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCTS_START:
            return {
                ...state,
                products: null,
                error: null,
                loading: true
            }
        case actionTypes.GET_ALL_PRODUCTS_SUCCESSED:
            return {
                ...state,
                products: action.data,
                error: null,
                loading: false
            };
        case actionTypes.GET_ALL_PRODUCTS_FAIL:
            return {
                ...state,
                products: null,
                error: action.error,
                loading: false
            }
        default :
            return state
    }
}

export default productReducer;
