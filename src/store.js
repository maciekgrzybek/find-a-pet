import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import animalsReducer from './reducers/animalsReducer';
import hoverReducer from './reducers/hoverReducer';


const rootReducer = combineReducers({
	animals: animalsReducer,
	hover: hoverReducer,
	form: formReducer
});

const store = createStore(rootReducer,{},applyMiddleware(thunk));

export default store;