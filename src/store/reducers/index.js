import { combineReducers } from 'redux';

import userReducer from './user';
import productReducer from './products';
import registerReducer from './register';

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
    register: registerReducer
});

export default rootReducer;
