import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from '../Navigation/AppNavigation';
import {configureStore} from '../Redux/CreateStore';

const {store, persistor} = configureStore();

export default class App extends PureComponent {
  render() {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      </PersistGate>
    );
  }
}
