import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '../containers/AppContainer';
import storeService from '../services/storeService';

export default class RootContainer extends React.Component {
  render() {
    return (
      <Provider store={storeService}>
        <AppContainer />
      </Provider>
    );
  }
}
