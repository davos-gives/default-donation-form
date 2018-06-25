import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASqUsKjZ6ZyUZg-yXRrf3ELx4JeeXjRdE",
  databaseURL: "https://davos-giving.firebaseio.com/",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
