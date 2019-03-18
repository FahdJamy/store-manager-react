import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import SignupForm from '../../components/Signup/Signup';

export class Register extends Component {

    state = {
        disabled: false,
        userInfo: {
            username: "",
            phone_no: "",
            password: ""
        },
        error: false,
        phoneTouched: false,
        passwordTouched: false,
        usernameTouched: false,
        confirmPassword: "",
        passwordsDontMatch: false
    }

    validateInputHandler = (e) => {
        let currentState = { ...this.state }
        const updateUserInfo = { ...currentState.userInfo }
        let disableBtn = true
        let usernameTouched = false
        let phoneTouched = false
        let passwordTouched = false
        let updatedConfPassword = currentState.confirmPassword

        if (e.target.name === "username") {
            updateUserInfo.username = e.target.value
            usernameTouched = false
        } else if ( e.target.name === "phone") {
            updateUserInfo.phone_no = e.target.value
            phoneTouched = false
            usernameTouched = this.state.userInfo.username.length <= 4
        } else if (e.target.name === "password") {
            updateUserInfo.password = e.target.value
            passwordTouched = false
            phoneTouched = this.state.userInfo.phone_no.length < 5
            usernameTouched = this.state.userInfo.username.length <= 4
        } else if (e.target.name === "cPassword") {
            phoneTouched = this.state.userInfo.phone_no.length < 5
            usernameTouched = this.state.userInfo.username.length < 4
            passwordTouched = this.state.userInfo.password.length < 5
            updatedConfPassword = e.target.value
        }

        if (updateUserInfo.username !== "") {
            disableBtn = updateUserInfo.username.length > 4 && disableBtn
        }
        if (updateUserInfo.phone_no !== "") {
            disableBtn = updateUserInfo.phone_no.length > 2 && disableBtn
        }
        if (updateUserInfo.password !== "") {
            disableBtn = updateUserInfo.password.length > 5 && disableBtn
        }
        if (updateUserInfo.username === "" || updateUserInfo.password === "" || updateUserInfo.phone_no === "") {
            disableBtn = false
        }

        this.setState({
            disabled: disableBtn,
            userInfo: updateUserInfo,
            usernameTouched: usernameTouched,
            phoneTouched: phoneTouched,
            passwordTouched: passwordTouched,
            confirmPassword: updatedConfPassword
        })
        e.preventDefault();
    }

    registerUserHanler = () => {
        const passwordsDontMatch = this.state.confirmPassword !== this.state.userInfo.password;
        this.setState({ passwordsDontMatch: passwordsDontMatch});

        if (!this.state.passwordsDontMatch) {
            this.props.registerUser(this.state.userInfo);
        }
    }
    
    render () {
        this.failedError = null
        this.formError = false
        this.successColor = null

        if (this.state.passwordsDontMatch) {
            this.failedError = "Sorry passwords don't match";
            this.formError = true
        } 
        else if (this.props.error !== null && this.props.error.message) {
            this.failedError = this.props.error.message
            this.formError = true
        } else if (this.props.registered !== null) {
            this.formError = true
            this.successColor = "green"
            this.failedError = this.props.registered.message
        }
        
        return (
            <>
                <SignupForm
                    submitData={this.registerUserHanler}
                    inputChanged={this.validateInputHandler}
                    disabled={!this.state.disabled}
                    setError={this.formError}
                    registrationError={this.failedError}
                    usernameError={this.state.usernameTouched}
                    passwordError={this.state.passwordTouched}
                    phoneError={this.state.phoneTouched}
                    loading={this.props.loading}
                    green={this.successColor}/>
            </>
        )
    }
}

export const mapStateToProps = state => {
    return {
        loading: state.register.loading,
        error: state.register.error,
        registered: state.register.registered
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        registerUser: (userData) => dispatch(actions.registerUser(userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
