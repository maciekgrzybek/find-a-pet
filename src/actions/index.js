import { FETCH_ANIMALS, ADD_ANIMAL, UPLOAD_IMAGE, HOVER_ANIMAL, SET_MAP_BOUNDS } from '../constants/actionTypes';
import { database, storage } from '../constants/firebase';
import _ from 'lodash';



//-----------------------
// Action Creators 
//-----------------------



//-----------------------
export function fetchAnimals(city = '') {
	
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
export function animalsInMapBounds(animals, bounds) {
	
			let res = _.pickBy(animals,(value,key) => {
				let { lat, lng } = value.location;
				let mapArea = new window.google.maps.Polygon({paths: bounds});
				let curPosition = new window.google.maps.LatLng(lat, lng);
				if(window.google.maps.geometry) {
					return (window.google.maps.geometry.poly.containsLocation(curPosition, mapArea))
				}	
			})
			console.log(res)
			return {
				type: 'siemano',
				payload: res
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
	return {
		type: SET_MAP_BOUNDS,
		payload: bounds
	}
}
