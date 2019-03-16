import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as actionTypes from '../actionsTypes';
import { loginUser, registerUser, autoLoginUser } from '../auth';

describe('User login', () => {
    const loginData = {
        username: "admin",
        password: "123"
    }
    it('tests user login succeeds', () => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({});
		axios.post.mockResolvedValue({ data: {} });

		const expectedAction = [{ type: actionTypes.LOGIN_USER_START }, { type: 'LOGIN_USER_SUCCESS', data: {} }];
		return store.dispatch(loginUser({loginData})).then(() => {
			expect(store.getActions()).toEqual(expectedAction)
		});
    });
    
    it('tests user login failed', () => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({});

		const expectedActions = [{ type: 'LOGIN_USER_AGAIN', token: 'undefined' }];
		return store.dispatch(autoLoginUser()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		});
	});

	it('tests auto user login', () => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({});
		axios.post.mockRejectedValue({ response: { data: {}} });

		const expectedActions = [{ type: 'LOGIN_USER_START' },
			{ type: 'LOGIN_USER_FAIL', error: {} }];
        
		return store.dispatch(loginUser({loginData})).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		});
	});
});

describe('User registration', () => {
    const userData = {
        username: "admin",
			password: "123",
			phone: "07009898"
    }
    it('tests user registration succeeds', () => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({});
		axios.post.mockResolvedValue({ data: {} });

		const expectedAction = [{ type: actionTypes.REGISTER_USER_STARTED },
			{ type: actionTypes.REGISTER_USER_SUCCEEDED, data: {} }];
		return store.dispatch(registerUser({userData})).then(() => {
			expect(store.getActions()).toEqual(expectedAction)
		});
    });
    
    it('tests user registration failed', () => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({});
		axios.post.mockRejectedValue({ response: { data: {}} });

		const expectedActions = [{ type: actionTypes.REGISTER_USER_STARTED },
			{ type: actionTypes.REGISTER_USER_FAILED, error: {} }];
        
		return store.dispatch(registerUser({userData})).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		});
	});
});
