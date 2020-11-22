import firebase, { userDetailsRef, cardsRef } from '../firebaseConfig';

export const registerAction = (name: string, email: string, password: string) => async (dispatch: any) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
    userDetailsRef.push().set({
      userId: response.user?.uid,
      userName: name
    });

    dispatch({
      type: 'register',
      payload: true
    })
  }).catch((e) => {
    console.log(e);
  })
};

export const loginAction = (email: string, password: string) => async (dispatch: any) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((_) => {
    dispatch({
      type: 'login',
      payload: true
    })
  }).catch((e) => {
    console.log(e);
  });
};

export const getAllCards = () => async (dispatch: any) => {
  cardsRef.on('value', snapshot => {
    dispatch({
      type: 'getAllCards',
      payload: snapshot.val() || {}
    });
  });
};

export const addCard = (text: string) => async (dispatch: any) => {
  cardsRef.push().set({
    value: text
  }).then(() => {
    dispatch({
      type: "addCard"
    });
  });
};