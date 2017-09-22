import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: ['Cabin:499,500,600,700']
  },
})


ReactDOM.render(
	<Provider store={ store } >
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')); 

registerServiceWorker();
