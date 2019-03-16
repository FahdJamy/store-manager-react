import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';

import Login from './Login/Login';
import Products from './Products/Products';
import Layout from './Layout/Layout';

class App extends Component {
    render () {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Layout >
                        <Route path="/home" exact component={Products} />
                    </Layout>
                </Switch>
            </>
        )
    }
}

export default withRouter(App);
