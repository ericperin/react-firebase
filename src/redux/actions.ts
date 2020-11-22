import firebase, { userDetailsRef, cardsRef } from '../firebaseConfig';
import { ActionTypes } from './actionTypes';

export const registerAction = (name: string, email: string, password: string) => async (dispatch: any) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
    userDetailsRef.push().set({
      userId: response.user?.uid,
      userName: name
    });

    dispatch({
      type: ActionTypes.REGISTER_USER,
      payload: true
    })
  }).catch((e) => {
    console.log(e);
  })
};

export const loginAction = (email: string, password: string) => async (dispatch: any) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then((_) => {
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: true
    });
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