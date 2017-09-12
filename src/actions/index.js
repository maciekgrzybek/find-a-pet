import { FETCH_ANIMALS, ADD_ANIMAL, UPLOAD_IMAGE, HOVER_ANIMAL, SET_MAP_BOUNDS, SEARCH_CITY } from '../constants/actionTypes';
import { database, storage } from '../constants/firebase';



//-----------------------
// Action Creators 
//-----------------------


//-----------------------
// export function fetchAnimals(animals) {

// 	return dispatch => {
// 		database.ref(`/zwierzak`).on('value', snapshot => {
// 			dispatch({
// 				type: FETCH_ANIMALS,
// 				payload: snapshot.val()
// 			})
// 		})
// 	}
// }
export function fetchAnimals(city = '') {
	console.log(city.toLowerCase())
	return dispatch => {
		database.ref(`/zwierzak`).orderByChild('/location/city').endAt(city.toLowerCase()).on('value', snapshot => {
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


export function setMapBounds(bounds) {
	return {
		type: SET_MAP_BOUNDS,
		payload: bounds
	}
}

export function searchCity(city) {
	return {
		type: SEARCH_CITY,
		payload: city
	}
}