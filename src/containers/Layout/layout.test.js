import React from 'react';
import { shallow } from 'enzyme';

import { Layout, mapStateToProps } from './Layout'

describe('<Layout />', () => {
    const props = {};
    let wrapper = shallow(<Layout {...props} />);
    let instance = wrapper.instance();
    const e = {};
    const State = {
        user: {
            isAdmin: false
        }
    };

    it('should call handleItemClick functions', () => {
        instance.handleItemClick(e, {name: "home"});
        expect(instance.state.activeItem).toEqual('home');
    });

    it('should map state to props', () => {
        expect(mapStateToProps(State)).toEqual({"isAdmin": false});
    });
});
