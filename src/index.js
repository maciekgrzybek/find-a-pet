import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
	<Provider store={ store } >
		<App />
	</Provider>, 
	document.getElementById('root'));

registerServiceWorker();
