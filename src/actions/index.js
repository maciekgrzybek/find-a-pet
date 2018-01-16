import { 
	ANIMAL_LIST_FILTER, 
	FETCH_ANIMAL, 
	FETCH_ANIMALS, 
	ADD_ANIMAL, 
	HOVER_ANIMAL, 
	SET_MAP_BOUNDS, 
	SET_CENTER, 
	SET_MAP_DIMENSIONS,
	TOGGLE_NAVIGATION
} from '../constants/actionTypes';
import { database } from '../constants/firebase';
import { fitBounds } from 'google-map-react/utils';



//-----------------------
// Action Creators 
//-----------------------



//-----------------------
export function fetchAnimals() {
	
	return dispatch => {
		database.ref(`/zwierzak`).on('value', snapshot => {
			dispatch({
				type: FETCH_ANIMALS,
				payload: snapshot.val()
			})
		})
	}
	
}

//-----------------------
export function fetchAnimal(id) {
	
	return dispatch => {
		database.ref(`/zwierzak/${id}`).on('value', snapshot => {
			dispatch({
				type: FETCH_ANIMAL,
				payload: {
					data: snapshot.val(),
					id
				}
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
export function hoverAnimal(key) {
	return {
		type: HOVER_ANIMAL,
		payload: key
	}
}



// ----------------------
export function animalListFilter(type){
	return {
		type: ANIMAL_LIST_FILTER,
		payload: type
	}
}

// ----------------------
export function toggleNavigation(){
	return {
		type: TOGGLE_NAVIGATION
	}
}


//-----------------------
export function setMapDimensions(size) {
	return {
		type: SET_MAP_DIMENSIONS,
		payload: size
	}
}

//-----------------------
export function setCenter(nw, se, width, height) {

	const bounds = {
		nw,
		se
	};
	const size = {
		width,
		height
	};

	const {center, zoom} = fitBounds(bounds, size);

	return {
		type: SET_CENTER,
		payload: {
			center,
			zoom
		}
	}
}

//-----------------------
export function setMapBounds(bounds) {

		const mapBounds = [];
		mapBounds[0] = bounds.nw;
		mapBounds[1] = bounds.ne;
		mapBounds[2] = bounds.se;
		mapBounds[3] = bounds.sw;

	return {
		type: SET_MAP_BOUNDS,
		payload: mapBounds
	}
}
