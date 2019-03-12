import * as actionTypes from './actionsTypes';

import axios from '../../utils/axios';

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
    return function (dispatch){
        dispatch(startLoginUser())
        axios.post('/auth/login', userInfo)
            .then(response => {
                dispatch (userLoginSuccess(response.data))
            })
            .catch(error => {
                dispatch (userLoginFail(error.response.data))
            });
    }
}
