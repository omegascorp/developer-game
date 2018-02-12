import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Space from '../components/Space';
import {COLOR_PRIMARY} from "../styles/constants";

export default class AppView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.content}>
            <Image
              source={require('../../assets/logo.png')}
              style={[styles.logo]}
            />
            <Space size={24} />
            <Input placeholder="Character name" height={48} width={192} />
            <Space size={24} />
            <Button color={COLOR_PRIMARY} height={48}>Start</Button>
          </View>
        </KeyboardAvoidingView>
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
    padding: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    resizeMode: 'contain',
  },
});
