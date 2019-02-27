import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './store/reducer';
import App from './containers/App';
import './index.css';

const store = createStore(reducer)
const app = (
            <Provider store={store}>
                <App />
            </Provider>
        )

ReactDOM.render(app, document.getElementById('root'));
