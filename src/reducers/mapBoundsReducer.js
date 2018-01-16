import { SET_MAP_BOUNDS } from '../constants/actionTypes';

export default ( state = [], action) => {

	switch (action.type) {
		case SET_MAP_BOUNDS:
			return ({...state}, action.payload);
		default:
			return state;
	}
}