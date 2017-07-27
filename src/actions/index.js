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

export function fetchAnimals() {

	const animals = database.ref('/').once('value', (snapshot) => { snapshot.val()})
	console.log(animals)

	return {
		type: FETCH_ANIMALS,
		payload: animals
	}
}