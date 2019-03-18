import React from 'react';
import { shallow } from 'enzyme';

import { Register, mapDispatchToProps, mapStateToProps } from './Register'

describe('<Register />', () => {
    const props = {
        error: null,
        isAuthenticated: false,
        registerUser: jest.fn(),
        registered: null,
        passwordsDontMatch: false
    };
    const currentState = {
        register: {
            loading: false,
            registered: null,
            error: null
        }
    }
    let wrapper = shallow(<Register {...props} />);
    let instance = wrapper.instance();

    it('should update username value in state if user inputs value in username field', () => {
        const e = {
            target : {
                name: "username",
                value: "admin"
            },
            preventDefault: () => {} };
        instance.validateInputHandler(e);
        expect(instance.state.userInfo.username).toEqual('admin');
    });

    it('should update password value in state if user inputs value in password field', () => {
        const e = {
            target : {
                name: "password",
                value: "123"
            },
            preventDefault: () => {} };
        instance.validateInputHandler(e);
        expect(instance.state.userInfo.password).toEqual('123');
    });

    it('should update phone value in state if user inputs value in phone number field', () => {
        const e = {
            target : {
                name: "phone",
                value: "000"
            },
            preventDefault: () => {} };
        instance.validateInputHandler(e);
        expect(instance.state.userInfo.phone_no).toEqual('000');
    });

    it('should update confirmPassword value in state if user inputs value in confirmPassword field', () => {
        const e = {
            target : {
                name: "cPassword",
                value: "123"
            },
            preventDefault: () => {} };
        instance.validateInputHandler(e);
        expect(instance.state.confirmPassword).toEqual('123');
    });

    it('should update successColor value in render method if user registeration is successful', () => {
        wrapper.setProps({ registered: {msg: "registered successfully"}});
        expect(instance.successColor).toEqual("green");
    });

    it('should update formError value in render method to true if passwords dont match', () => {
        instance.setState({ passwordsDontMatch: true });
        expect(instance.formError).toBeTruthy();
    });

    it('should call the registerUser action is if passwords match', () => {
        instance.registerUserHanler()
        expect(props.registerUser).toHaveBeenCalled();
    })

    it('should update failedError in the render method is error is not null', () => {
        wrapper.setProps({ error: {message: 'sorry username is already taken'}});
        expect(instance.failedError).toEqual("sorry username is already taken");
    });

    it('should map state to props', () => {
        expect(mapStateToProps(currentState)).toEqual({"error": null, "registered": null, "loading": false});
    });

    it('should dispatch state to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).registerUser();
        expect(dispatch.mock.calls.length).toBe(1);
    });
});
