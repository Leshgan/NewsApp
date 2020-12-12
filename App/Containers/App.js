import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import AppNavigation from '../Navigation/AppNavigation';
import {configureStore} from '../Redux/CreateStore';

const store = configureStore();

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
