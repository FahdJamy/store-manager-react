import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import * as actionTypes from '../actionsTypes';
import { getAllAvailableProducts } from '../products';

describe('Products', () => {
    it('tests that all products are returned successfully', () => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({});
		axios.get.mockResolvedValue({ data: {} });

        const expectedAction = [{ type: actionTypes.GET_ALL_PRODUCTS_START },
            { type: actionTypes.GET_ALL_PRODUCTS_SUCCESSED, data: {} }];
		return store.dispatch(getAllAvailableProducts()).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
		});
    });
    
    it('tests that retreiving products failed', () => {
		const mockStore = configureMockStore([thunk]);
		const store = mockStore({});
		axios.get.mockRejectedValue({ response: { data: {}} });

        const expectedActions = [{ type: actionTypes.GET_ALL_PRODUCTS_START },
            { type: actionTypes.GET_ALL_PRODUCTS_FAIL,  error: {} }];
        
		return store.dispatch(getAllAvailableProducts()).then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		});
	});
})
