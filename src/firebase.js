import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyBf6RRd8Mh_hKj5SovsnU7AVeW8U-NfFSU',
	authDomain: 'lunch-choice-ae45c.firebaseapp.com',
	databaseURL: 'https://lunch-choice-ae45c.firebaseio.com',
	projectId: 'lunch-choice-ae45c',
	storageBucket: 'lunch-choice-ae45c.appspot.com',
	messagingSenderId: '265415369431'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
