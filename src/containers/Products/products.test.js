import React from 'react';
import { shallow } from 'enzyme';

import { Products, mapDispatchToProps, mapStateToProps } from './Products'

describe('<Products />', () => {
    const props = {
        error: null,
        isAuthenticated: false,
        getProducts: jest.fn(),
        products: null
    };
    const currentState = {
        products: {
            loading: false,
            products: null
        }
    }
    let wrapper = shallow(<Products {...props} />);
    let instance = wrapper.instance();

    it('should return all products if products prop is not null', () => {
        wrapper.setProps({ products: {
            Products : [ 
                {id:1, productName:'weed', stock:33},
                {id:1, product_name:'carrot', stock:33}]} });
        expect(instance.products).not.toBeNull();
    });

    it('should map state to props', () => {
        expect(mapStateToProps(currentState)).toEqual({"products": null, "loading": false});
    });

    it('should dispatch state to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).getProducts();
        expect(dispatch.mock.calls.length).toBe(1);
    });
});
