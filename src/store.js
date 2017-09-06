import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import animalsReducer from './reducers/animalsReducer';


const rootReducer = combineReducers({
	animals: animalsReducer,
	form: formReducer
});

const store = createStore(rootReducer,{},applyMiddleware(thunk));

export default store;