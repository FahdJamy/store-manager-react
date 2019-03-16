import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout'

describe('<Layout />', () => {
    const props = {};
    let wrapper = shallow(<Layout {...props} />);
    let instance = wrapper.instance();
    const e = {};

    it('should call handleItemClick functions', () => {
        instance.handleItemClick(e, {name: "home"});
        expect(instance.state.activeItem).toEqual('home');
    })
})
