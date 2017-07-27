import { FETCH_ANIMALS } from '../constants/actionTypes';
import firebase from 'firebase';

// Firebase query config

const firebaseConfig = {
	apiKey: 'AIzaSyAnj-ob4fBAc5z6lmNEjGhQIgM8iyUqQ7w',
	authDomain: 'znajdz-zwierzaka.firebaseio.com',
	databaseURL: 'https://znajdz-zwierzaka.firebaseio.com/'
}
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;

export function fetchAnimals(animals) {

	return dispatch => {
		database.ref('/zwierzak').on('value', snapshot => {
			dispatch({
				type: FETCH_ANIMALS,
				payload: snapshot.val()
			})
		})
	}
}