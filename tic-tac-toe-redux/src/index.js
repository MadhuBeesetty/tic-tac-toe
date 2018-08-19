import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from'redux';

import './index.css';
import App from './App';
import allReducer from './reducer';

const store = createStore(allReducer);

ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>, document.getElementById('root'));
registerServiceWorker();
