import MainNavigator from '../navigators/MainNavigator';
const initialState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('SignIn'));

export default function (state = initialState, action) {
  const nextState = MainNavigator.router.getStateForAction(action, state);

  return nextState || state;
};
