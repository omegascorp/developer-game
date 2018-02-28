import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Keyboard } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Space from '../components/Space';
import {COLOR_PRIMARY} from "../styles/constants";
import {authAction} from "../emitters/authEmitter";

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: "aaa",
  };

  onSubmit = () => {
    Keyboard.dismiss();
    this.props.navigation.dispatch(authAction(this.state.name));
  }

  onChangeName = (value) => {
    console.log("ok", value);
    this.setState({
      name: value,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={require('../../assets/logo.png')}
            style={[styles.logo]}
          />
          <Space size={24} />
          <KeyboardAvoidingView behavior="padding">
            <Input
              value={this.state.name}
              placeholder="Character name"
              height={48}
              width={192}
              onTextChange={this.onChangeName}
            />
          </KeyboardAvoidingView>
          <Space size={24} />
          <Button color={COLOR_PRIMARY} height={48} onPress={this.onSubmit}>Start</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 100,
    resizeMode: 'contain',
  },
});
