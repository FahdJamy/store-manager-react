import React from 'react';
import { shallow } from 'enzyme';

import Product from '../Product';

describe('<Product />', () => {
    it('Product will render without crashing', () => {
        let wrapper = shallow(<Product />);
        expect(wrapper).toMatchSnapshot();
    });
});