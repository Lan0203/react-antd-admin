import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'

import App from './App.js';

ReactDOM.render(
<Provider store={store}>
	<Router>
		<App />
	</Router>
</Provider>		
, document.getElementById('root'));
