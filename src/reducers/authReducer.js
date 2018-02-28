const INITIAL_STATE = {
  signedIn: false,
  name: "",
};

export const ACTION_AUTH = 'actionTypeAuth';

export default function (state = INITIAL_STATE, action = {}) {
  console.log(action);
  switch(action.type) {
    case ACTION_AUTH: {
      return {
        ...state,
        signedIn: true,
        name: action.name,
      };
    }
    default: {
      return state;
    }
  }
}
