import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

class Products extends Component {
    
    render () {

        return (
            <>
                <h5>Welcome to store manager</h5>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        isAuthenticated: state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onLoginUser: (userLoginInfo) => dispatch(actions.loginUser(userLoginInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
