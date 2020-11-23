import { ActionTypes } from "../actionTypes";

const USER_KEY = "react_user";

export interface AuthState {
  user: object,
  validToken: boolean
}

const initialState = {
  user: JSON.parse(localStorage.getItem(USER_KEY)!),
  validToken: false
};

type Action = {
  type: ActionTypes, payload: string
};

const AuthReducer = (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.VALID_TOKEN: {
      if (action.payload) {
        return { ...state, validToken: true, user: action.payload };
      }

      localStorage.removeItem(USER_KEY);
      return { ...state, validToken: false, user: null };
    }
    case ActionTypes.REGISTER_USER: {
      return { ...state, validToken: action.payload };
    }
    case ActionTypes.LOGIN_USER: {
      debugger;
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload));
      return { ...state, validToken: true, user: action.payload };
    }
    default:
      return state;
  }
}

export default AuthReducer;