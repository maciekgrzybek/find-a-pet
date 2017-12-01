import { SET_MAP_DIMENSIONS } from '../constants/actionTypes';

export default ( state = null, action) => {

	switch (action.type) {
		case SET_MAP_DIMENSIONS:
			return ({...state}, action.payload);
		default:
			return state;
	}
}