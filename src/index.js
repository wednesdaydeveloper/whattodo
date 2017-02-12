import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App.jsx';
import store from './Store.js';

ReactDOM.render(
  <Provider store = { store } >
    <App />
  </Provider>,
	document.getElementById('root')
);