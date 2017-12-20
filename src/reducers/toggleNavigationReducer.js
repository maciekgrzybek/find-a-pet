import { TOGGLE_NAVIGATION } from '../constants/actionTypes';

export default ( state=false, action ) => {

		switch (action.type) {
			case TOGGLE_NAVIGATION:
				return !state;
			default:
				return state;
		}
		
}