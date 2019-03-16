import * as actionTypes from '../../actions/actionsTypes';
import productsReducer from '../products';

describe('Products Reducer', () => {
    it ('should return intial state', () => {
        expect(productsReducer(undefined, {})).toEqual({
            products: null,
            error: null,
            loading: false
        })
    });

    it ('reducer should update loading value in state', () => {
        expect(productsReducer(undefined, {type: actionTypes.GET_ALL_PRODUCTS_START})).toEqual({
            products: null,
            error: null,
            loading: true
        })
    });

    it ('reducer should update products value in state', () => {
        expect(productsReducer(undefined, {type: actionTypes.GET_ALL_PRODUCTS_SUCCESSED, data: {products: ['weed', 'soap']}})).toEqual({
            products: {products: ['weed', 'soap']},
            loading: false,
            error: null
        })
    });

    it ('reducer should update error value in state', () => {
        expect(productsReducer(undefined, {type: actionTypes.GET_ALL_PRODUCTS_FAIL, error: {message: 'no products'}})).toEqual({
            products: null,
            error: {message: 'no products'},
            loading: false
        })
    });
});
