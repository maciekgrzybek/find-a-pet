import { FETCH_ANIMALS } from '../constants/actionTypes';
import _ from 'lodash';

export default (state = null, action) => {

	switch(action.type) {
		case FETCH_ANIMALS:
			for(var key in action.payload) {
				if (action.payload.hasOwnProperty(key)) {
					action.payload[key].id = key;
				}
			}
			return ({...state}, action.payload);
		default:
			return state;
	}	
}

