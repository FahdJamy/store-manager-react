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
};

export const userIsAdmin = () => {
    return {
        type: actionTypes.USER_IS_ADMIN
    }
};

export const logoutUser = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("token")
    return {
        type: actionTypes.LOGOUT_USER
    }
};

export const loginUserAgain = (token) => {
    return {
        type: actionTypes.LOGIN_USER_AGAIN ,
        token
    }
};

export const autoLoginUser = () => {
    return async dispatch => {
        const username = localStorage.getItem("username")
        const token = localStorage.getItem("token")
        if (username !== null && token !== null) {
            if (username === "admin") {
                dispatch(userIsAdmin())
            }
            dispatch(loginUserAgain(token))
        } else if (username === null && token === null) {
            dispatch(logoutUser())
        }
    }
};

export const loginUser = (userInfo) => {
    return async dispatch => {
        dispatch(startLoginUser())
        try {
            const response = await axios.post(actionTypes.BASE_URL + '/auth/login', userInfo);
            localStorage.setItem("username", userInfo.username)
            localStorage.setItem("token", response.data.token)
            if (userInfo.username === "admin") {
                dispatch(userIsAdmin())
            }
            dispatch (userLoginSuccess(response.data))
        } catch (error) {
            dispatch (userLoginFail(error.response.data))
        }
    }
}

export const registerUserStarted = () => {
    return {
        type: actionTypes.REGISTER_USER_STARTED,
    }
};

export const registerUserSucceed = (data) => {
    return {
        type: actionTypes.REGISTER_USER_SUCCEEDED,
        data: data
    }
};

export const registerUserFailed = (error) => {
    return {
        type: actionTypes.REGISTER_USER_FAILED,
        error: error
    }
};

export const registerUser = (userInfo) => {
    return async dispatch => {
        dispatch(registerUserStarted())
        const data = {}
        data.username = userInfo.username
        data.phone_no = parseInt(userInfo.phone_no)
        data.password = userInfo.password
        const token = localStorage.getItem("token")
        try {
            const response = await axios.post(actionTypes.BASE_URL + '/auth/signup',
            data, {headers: {"token_key" : token}});
            dispatch (registerUserSucceed(response.data))
        } catch (error) {
            dispatch (registerUserFailed(error.response.data))
        }
    }
};
