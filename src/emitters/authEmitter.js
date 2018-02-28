import {ACTION_AUTH} from '../reducers/authReducer';

export function authAction(name) {
  return {
    type: ACTION_AUTH,
    name: name,
  };
}
