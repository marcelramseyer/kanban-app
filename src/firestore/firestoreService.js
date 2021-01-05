import firebase from '../config/firebase';

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  return {
    ...data,
    id: snapshot.id,
  };
}

export function getTasksFormFirestore(observer) {
  return db.collection('tasks').orderBy('pos').onSnapshot(observer);
}

export function addCardToFirestore(card) {
  return db.collection('cards').add({ cardText: card });
}
