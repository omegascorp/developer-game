import { StackNavigator } from 'react-navigation';
import SignInScreen from "../screens/SignInScreen";
import GameScreen from "../screens/GameScreen";

export default StackNavigator({
  SignIn: {
    screen: SignInScreen,
  },
  Game: {
    screen: GameScreen,
  }
}, {
  initialRouteName: 'SignIn',
});
