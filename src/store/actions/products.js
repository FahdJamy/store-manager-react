import * as actionTypes from './actionsTypes';

import axios from 'axios';

export const getProductsStart = () => {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_START
    }
}

export const getProductsSuccessed = (data) => {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_SUCCESSED,
        data: data
    }
}

export const getProductsFail = (error) => {
    return {
        type: actionTypes.GET_ALL_PRODUCTS_FAIL,
        error: error
    }
}

export const getAllAvailableProducts = () => {
    return async (dispatch) => {
        dispatch(getProductsStart())
        try {
            const response = await axios.get(actionTypes.BASE_URL + '/products');
            dispatch (getProductsSuccessed(response.data))
        } catch (error) {
            dispatch (getProductsFail(error.response.data))
        }
    }
}

