import React from 'react';
import { shallow } from 'enzyme';

import { Authentication, mapDispatchToProps, mapStateToProps } from './Login'

describe('<Authentication />', () => {
    const props = {
        error:null,
        isAuthenticated: false,
        onLoginUser: jest.fn()
    };
    const currentState = {
        user: {
            loading: false,
            isAuthenticated: false,
            error: null
        }
    }
    let wrapper = shallow(<Authentication {...props} />);
    let instance = wrapper.instance();

    it('should update username value in state if user inputs value in username field', () => {
        const e = {
            target : {
                name: "username",
                value: "admin"
            },
            preventDefault: () => {} };
        instance.loginHandler(e);
        expect(instance.state.userInfo.username).toEqual('admin');
    });

    it('should update password value in state if user inputs value in password field', () => {
        const e = {
            target : {
                name: "password",
                value: "123"
            },
            preventDefault: () => {} };
        instance.loginHandler(e);
        expect(instance.state.userInfo.password).toEqual('123');
    })

    it('should update errorMsg value in render method if error is not null', () => {
        wrapper.setProps({ error: {message: "username is wrong"}});
        expect(instance.errorMsg).toEqual("username is wrong");
    });

    it('should redirect user if isAuthenticated is true', () => {
        wrapper.setProps({ isAuthenticated: true});
        expect(instance.redirectHome).not.toBeNull();
    });

    it('should login user if submitDataHandler is called', () => {
        instance.submitDataHandler()
        expect(instance.redirectHome).not.toBeNull();
    });

    it('should map state to props', () => {
        expect(mapStateToProps(currentState)).toEqual({"error": null, "isAuthenticated": false, "loading": false});
    });

    it('should dispatch state to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onLoginUser();
        expect(dispatch.mock.calls.length).toBe(1);
    });
});
