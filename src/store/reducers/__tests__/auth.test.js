import * as actionTypes from '../../actions/actionsTypes';
import authReducer from '../user';

describe('Auth Reducer', () => {
    it ('reducer should return intial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,
            isAdmin: false,
            token: null
        })
    });

    it ('reducer should update loading value in state', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGIN_USER_START})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: true,
            error: null,
            isAdmin: false,
            token: null
        })
    });

    it ('reducer should update user and isAuthenticated value in state', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGIN_USER_SUCCESS, data: {user: 'logged in success'}})).toEqual({
            user: {user: 'logged in success'},
            isAuthenticated: true,
            loading: false,
            error: null,
            isAdmin: false,
            token: null
        })
    });

    it ('reducer should update error value in state', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGIN_USER_FAIL, error: {message: 'logged in failed'}})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: {message: 'logged in failed'},
            isAdmin: false,
            token: null
        })
    });

    it ('should return the intial user state is user logs out', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGOUT_USER})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,
            isAdmin: false,
            token: null
        })
    });

    it ('should update isAdmin value in user reducer is action type is userIsAdmin', () => {
        expect(authReducer(undefined, {type: actionTypes.USER_IS_ADMIN})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null,
            isAdmin: true,
            token: null
        })
    });

    it ('should update isAuthenticated value if action is log user again', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGIN_USER_AGAIN, token: "token"})).toEqual({
            user: null,
            isAuthenticated: true,
            loading: false,
            error: null,
            isAdmin: false,
            token: "token"
        })
    });

});
