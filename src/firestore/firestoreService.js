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
export function getProjectsFormFirestore(observer) {
  const { uid = {} } = firebase.auth().currentUser || {};
  return db
    .collection('projects')
    .where('userId', '==', uid)
    .onSnapshot(observer);
}

export function addCardToFirestore(card) {
  return db.collection('cards').add({ cardText: card });
}

export function getProjectsFromFirestore(user) {
  // const { uid = {} } = firebase.auth().currentUser || {};
  return db
    .collection('projects')
    .where('userId', '==', user)
    .get()
    .then(function (querySnapshot) {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      return data;
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error);
    });
}

export function setUserProfileData(user) {
  return db
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}
