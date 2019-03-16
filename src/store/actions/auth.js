import * as actionTypes from './actionsTypes';

import axios from 'axios';

export const startLoginUser = () => {
    return {
        type: actionTypes.LOGIN_USER_START
    }
}

export const userLoginSuccess = (data) => {
    return {
        type: actionTypes.LOGIN_USER_SUCCESS,
        data: data
    }
}

export const userLoginFail = (error) => {
    return {
        type: actionTypes.LOGIN_USER_FAIL,
        error: error
    }
}

export const loginUser = (userInfo) => {
    return async dispatch => {
        dispatch(startLoginUser())
        try {
            const response = await axios.post(actionTypes.BASE_URL + '/auth/login', userInfo);
            dispatch (userLoginSuccess(response.data))
        } catch (error) {
            dispatch (userLoginFail(error.response.data))
        }
    }
}
