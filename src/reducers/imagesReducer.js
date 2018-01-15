import { UPLOAD_IMAGE } from '../constants/actionTypes';


export default (state = null, action) => {

	switch(action.type) {
		case UPLOAD_IMAGE:
		return { ...state,[action.payload.name]: action.payload.url };
		default:
			return state;
	}	
}