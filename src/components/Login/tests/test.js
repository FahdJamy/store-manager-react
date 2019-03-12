import React from 'react';
import { shallow } from 'enzyme'

import LoginForm from '../Login';

describe('tests LoginForm', ()=> {
    it ('it should render without rashing', () => {
        let wrapper = shallow(<LoginForm />)
        expect(wrapper).toMatchSnapshot()
    })
})
