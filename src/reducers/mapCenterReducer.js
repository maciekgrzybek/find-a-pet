import { SET_CENTER } from '../constants/actionTypes';

let initialState = {
		lat: 52.259813,
		lng: 19.911042
}

export default ( state = initialState, action) => {

	switch (action.type) {
		case SET_CENTER:
			return ({...state}, action.payload);
		default:
			return state;
	}
}