import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyDfZrz-fhp0BA5Rw43vIBgXdwkatmMtGS0',
  authDomain: 'kanban-app-275a1.firebaseapp.com',
  projectId: 'kanban-app-275a1',
  storageBucket: 'kanban-app-275a1.appspot.com',
  messagingSenderId: '793331220301',
  appId: '1:793331220301:web:bc950a7361f4ed0a31c104',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
