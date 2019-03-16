import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login/Login';
import Products from './Products/Products';
import Layout from './Layout/Layout';
import Register from './Register/Register';
import Logout from './Logout/Logout';
import * as actions from '../store/actions/index';

export class App extends Component {
    componentDidMount () {
        if (!this.props.isAuthenticated) {
            this.props.onAutoLoginUser()
        }
    }

    render () {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                    <Layout >
                        <Route path="/home" exact component={Products} />
                        <Route path="/register" component={Register} />
                    </Layout>
                </Switch>
            </>
        )
    }
}

export const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        onAutoLoginUser: () => dispatch(actions.autoLoginUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
