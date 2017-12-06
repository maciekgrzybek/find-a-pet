import { ANIMAL_LIST_FILTER } from '../constants/actionTypes';

export default ( state = null, action ) => {

	switch(action.type) {
		
		case ANIMAL_LIST_FILTER :
			return ( {...state}, action.payload );
		default:
			return state;
	}
}