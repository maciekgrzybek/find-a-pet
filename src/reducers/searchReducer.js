import { SEARCH_CITY } from '../constants/actionTypes';

export default ( state='', action) => {

	switch (action.type) {
		case SEARCH_CITY:
			return {...state}, action.payload;
		default:
			return state;
	}
}