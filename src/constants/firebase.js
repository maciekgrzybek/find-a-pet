import firebase from 'firebase';


export const firebaseConfig = {
	apiKey: 'AIzaSyAnj-ob4fBAc5z6lmNEjGhQIgM8iyUqQ7w',
	authDomain: 'znajdz-zwierzaka.firebaseio.com',
	databaseURL: 'https://znajdz-zwierzaka.firebaseio.com/',
	storageBucket: 'gs://znajdz-zwierzaka.appspot.com'
}
firebase.initializeApp(firebaseConfig);


export const database = firebase.database();
export const storage = firebase.storage();
export const storageUrlRef = storage.refFromURL(firebaseConfig.storageBucket);
