import * as actionTypes from '../../actions/actionsTypes';
import registerReducer from '../register';

describe('Register Reducer', () => {
    it ('should return intial state', () => {
        expect(registerReducer(undefined, {})).toEqual({
            registered: null,
            loading: false,
            error: null
        })
    });

    it ('should update loading value in reducer\'s state', () => {
        expect(registerReducer(undefined, {type: actionTypes.REGISTER_USER_STARTED})).toEqual({
            registered: null,
            loading: true,
            error: null
        })
    });

    it ('should update loading user value in register state', () => {
        expect(registerReducer(undefined, {type: actionTypes.REGISTER_USER_SUCCEEDED, data: {msg: 'successful'}})).toEqual({
            registered: {msg: 'successful'},
            loading: false,
            error: null
        })
    });

    it ('should update error value in register state', () => {
        expect(registerReducer(undefined, {type: actionTypes.REGISTER_USER_FAILED, error: {msg: 'registration failed'}})).toEqual({
            registered: null,
            loading: false,
            error: {msg: 'registration failed'}
        })
    });
});
