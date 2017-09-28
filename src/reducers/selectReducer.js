import { SELECT_ANIMAL } from '../constants/actionTypes';


export default (state = null, action) => {

	switch(action.type) {
		case SELECT_ANIMAL:
			return ({...state}, action.payload);
		default:
			return state;
	}	
}