import * as actionTypes from '../../actions/actionsTypes';
import authReducer from '../user';

describe('Auth Reducer', () => {
    it ('reducer should return intial state', () => {
        expect(authReducer(undefined, {})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: null
        })
    });

    it ('reducer should update loading value in state', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGIN_USER_START})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: true,
            error: null
        })
    });

    it ('reducer should update loading user value in state', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGIN_USER_SUCCESS, data: {user: 'logged in success'}})).toEqual({
            user: {user: 'logged in success'},
            isAuthenticated: true,
            loading: false,
            error: null
        })
    });

    it ('reducer should update error value in state', () => {
        expect(authReducer(undefined, {type: actionTypes.LOGIN_USER_FAIL, error: {message: 'logged in failed'}})).toEqual({
            user: null,
            isAuthenticated: false,
            loading: false,
            error: {message: 'logged in failed'}
        })
    });
});
