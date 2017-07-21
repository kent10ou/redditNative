import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

import { 
  createStore, 
  applyMiddleware
} from 'redux';

// Log actions
const loggerMiddleware = createLogger();

// Create store with middleware
function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}

export default configureStore;




