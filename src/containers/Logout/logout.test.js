import React from 'react';
import { shallow } from 'enzyme';

import { Logout, mapDispatchToProps } from './Logout'

describe('<Logout />', () => {
    const props = {
        onLogout: jest.fn()
    };
    let wrapper = shallow(<Logout {...props} />);
    let instance = wrapper.instance();

    it('should dispatch state to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onLogout();
        expect(dispatch.mock.calls.length).toBe(1);
    });
});
