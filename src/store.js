import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import animalsReducer from './reducers/animalsReducer';


const rootReducer = combineReducers({
	animals: animalsReducer
});

const store = createStore(rootReducer,{},applyMiddleware(thunk,logger));

export default store;