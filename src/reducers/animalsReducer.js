import { FETCH_ANIMAL, FETCH_ANIMALS } from '../constants/actionTypes';

export default (state = {}, action) => {

	switch(action.type) {
		case FETCH_ANIMALS:
			for(var key in action.payload) {
				if (action.payload.hasOwnProperty(key)) {
					action.payload[key].id = key;
				}
			}
			return ({...state}, action.payload);
		case FETCH_ANIMAL:
			action.payload.data.id = action.payload.id;
			return { ...state,[action.payload.id]: action.payload.data };
		default:
			return state;
	}	
}

