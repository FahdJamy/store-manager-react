import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login/Login';
import Products from './Products/Products';


class App extends Component {
    render () {
        return (
            <>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" exact component={Products} />
                </Switch>
            </>
        )
    }
}

export default App;
