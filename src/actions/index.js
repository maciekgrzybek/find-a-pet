import { FETCH_ANIMALS, ADD_ANIMAL, UPLOAD_IMAGE, HOVER_ANIMAL, SET_MAP_BOUNDS } from '../constants/actionTypes';
import { database, storage } from '../constants/firebase';
import _ from 'lodash';



//-----------------------
// Action Creators 
//-----------------------



//-----------------------
export function fetchAnimals(city = '', bounds) {
	
	const searchTerm = city.toLowerCase()
	return dispatch => {
		database.ref(`/zwierzak`).orderByChild('/location/city').startAt(searchTerm).endAt(searchTerm + "\uf8ff").on('value', snapshot => {
			dispatch({
				type: FETCH_ANIMALS,
				payload: snapshot.val()
			})
		})
	}
	
}


//-----------------------
export function addAnimal(values, callback) {

	var newAnimalKey = database.ref().child('zwierzak').push().key;
	
	return dispatch => {
		database.ref('/zwierzak/' + newAnimalKey).update(values)
		.then(() => {
			dispatch({ 
				type: ADD_ANIMAL
			})
		})
		.then(() => callback())
	}
}

//-----------------------
export function uploadImage(file, callback) {

	const imageRef = storage.ref().child(file[0].name)
	return dispatch => {
		imageRef.put(file[0])
		.then(() => {
			dispatch({
				type: UPLOAD_IMAGE
			})
		})
		.then(() => callback())
	}
}

//-----------------------
export function hoverAnimal(key) {
	return {
		type: HOVER_ANIMAL,
		payload: key
	}
}

//-----------------------
export function setMapBounds(bounds) {

		const mapBounds =[]
		mapBounds[0] = bounds.nw;
		mapBounds[1] = bounds.ne;
		mapBounds[2] = bounds.se;
		mapBounds[3] = bounds.sw;

	return {
		type: SET_MAP_BOUNDS,
		payload: mapBounds
	}
}
