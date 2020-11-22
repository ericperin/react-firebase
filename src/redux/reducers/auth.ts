import { ActionTypes } from "../actionTypes";

const initialState = {
  loggedIn: false
};

export default function cardReducer(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.REGISTER_USER: {
      return { ...state, loggedIn: action.payload };
    }
    case ActionTypes.LOGIN_USER: {
      return { ...state, loggedIn: action.payload };
    }
    default:
      return state;
  }
}
