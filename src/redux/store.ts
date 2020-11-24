import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

function configureStore(
  state = {

  }
) {
  return createStore(rootReducer, state, applyMiddleware(reduxThunk));
}

export default configureStore;
