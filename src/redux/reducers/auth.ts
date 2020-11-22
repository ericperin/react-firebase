import { ActionTypes } from "../actionTypes";

export interface AuthState {
  loggedIn: boolean
}

const initialState = {
  loggedIn: false
};

type Action = {
  type: ActionTypes, payload: string
};

const AuthReducer = (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER: {
      return { ...state, loggedIn: action.payload };
    }
    case ActionTypes.LOGIN_USER: {
      debugger;
      return { ...state, loggedIn: action.payload };
    }
    default:
      return state;
  }
}

export default AuthReducer;