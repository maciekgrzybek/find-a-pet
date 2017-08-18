import { FETCH_ANIMALS, ADD_ANIMAL, UPLOAD_IMAGE } from '../constants/actionTypes';
import { database, storage } from '../constants/firebase';



//
// Action Creators 
//
export function fetchAnimals(animals) {

	return dispatch => {
		database.ref(`/zwierzak`).on('value', snapshot => {
			dispatch({
				type: FETCH_ANIMALS,
				payload: snapshot.val()
			})
		})
	}
}

export function addAnimal(values) {

	var newAnimalKey = database.ref().child('zwierzak').push().key;
	
	return dispatch => {
		database.ref('/zwierzak/' + newAnimalKey).update(values)
		.then(() => {
			dispatch({
				type: ADD_ANIMAL
			})
		})
	}
}

export function uploadImage(file, callback) {

	console.log(file);
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