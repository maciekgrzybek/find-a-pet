import { FETCH_ANIMALS } from '../constants/actionTypes';


export default (state = null, action) => {

	switch(action.type) {
		case FETCH_ANIMALS:
			return Object.assign({}, state, action.payload)
		default:
			return state;
	}	
}