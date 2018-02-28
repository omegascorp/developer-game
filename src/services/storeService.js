import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import authReducer from '../reducers/authReducer';
import navigationReducer from '../reducers/navigationReducer';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);

export const addRootListener = createReduxBoundAddListener("root");

const reducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
});

export default createStore(reducer, applyMiddleware(middleware));
