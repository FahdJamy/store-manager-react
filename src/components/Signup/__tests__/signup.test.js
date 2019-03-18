import React from 'react';
import { shallow } from 'enzyme'

import SignupForm from '../Signup';

describe('tests SignupForm', ()=> {
    it ('it should render without rashing', () => {
        let wrapper = shallow(<SignupForm />)
        expect(wrapper).toMatchSnapshot()
    });
});
