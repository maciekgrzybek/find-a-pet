import { HOVER_ANIMAL } from '../constants/actionTypes';


export default (state = null, action) => {

	switch(action.type) {
		case HOVER_ANIMAL:
			return {...state}, action.payload;
		default:
			return state;
	}	
}