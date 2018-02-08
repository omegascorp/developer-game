import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import mixins from '../styles/mixins';
import Input from '../components/Input';
import Button from '../components/Button';
import Space from '../components/Space';

export default class AppView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={[styles.logo]}
        />
        <Space size={24} />
        <Input placeholder="Character name" height={48} width={192} />
        <Space size={24} />
        <Button height={48}>Start</Button>
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
  logo: {
    height: 100,
    resizeMode: 'contain',
  },
});
