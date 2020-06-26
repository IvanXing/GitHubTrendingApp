import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from './navigator/AppNavigators';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
