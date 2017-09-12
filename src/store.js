import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import animalsReducer from './reducers/animalsReducer';
import hoverReducer from './reducers/hoverReducer';
import mapBoundsReducer from './reducers/mapBoundsReducer';


const rootReducer = combineReducers({
	animals: animalsReducer,
	hover: hoverReducer,
	mapBounds: mapBoundsReducer,
	form: formReducer
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

export default store;