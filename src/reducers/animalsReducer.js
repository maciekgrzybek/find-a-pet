import { FETCH_ANIMALS } from '../constants/actionTypes';


export default (state = {}, action) => {

	switch(action.type) {
		case FETCH_ANIMALS:
			return {...state, [action.payload.data]:action.payload.data};
		default:
			return state;
	}	
}