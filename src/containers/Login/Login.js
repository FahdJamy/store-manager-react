import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect }  from 'react-router-dom';

import Login from '../../components/Login/Login';
import * as actions from '../../store/actions/index';
import './Login.css';

export class Authentication extends Component {

    state = {
        disabled: false,
        userInfo: {
            username: "",
            password: "" 
        }
    }

    loginHandler = (e) => {
        const updateUserInfo = {...this.state.userInfo}
        let disableBtn = true
        
        if (e.target.name === "username" ) {
            updateUserInfo.username = e.target.value
        } else if (e.target.name === "password" ) {
            updateUserInfo.password = e.target.value
        }

        if ( updateUserInfo.username !== "" ) {
            disableBtn = updateUserInfo.username.length > 2 && disableBtn
        }
        if (updateUserInfo.password !== "") {
            disableBtn = updateUserInfo.password.length > 2 && disableBtn
        }
        if ( updateUserInfo.username === "" || updateUserInfo.password === "") {
            disableBtn = false
        }
        
        this.setState({ disabled: disableBtn, userInfo: updateUserInfo })
        e.preventDefault();
    }

    submitDataHandler = () => {
        this.props.onLoginUser(this.state.userInfo);
    }
    
    render () {
        this.redirectHome = null
        this.errorMsg = null
        this.errorInform = false

        if (this.props.isAuthenticated) {
            this.redirectHome = (<Redirect to="/home"/>)
        } else if (this.props.error !== null) {
            this.errorMsg = this.props.error.message
            this.errorInform = true
        }

        return (
            <div className="Login">
                {this.redirectHome}
                <Login
                    disabled={!this.state.disabled}
                    inputChanged={ (e) => this.loginHandler(e, this.state.userInfo)}
                    onSubmit={this.submitDataHandler}
                    loading={this.props.loading}
                    errorMsg={this.errorMsg}
                    invalidForm={this.errorInform}
                    />
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        isAuthenticated: state.user.isAuthenticated,
        error: state.user.error
    }
}

export const mapDispatchToProps = (dispatch) => {
    return { 
        onLoginUser: (userLoginInfo) => dispatch(actions.loginUser(userLoginInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
