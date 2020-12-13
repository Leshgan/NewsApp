import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {reducer as channelReducer} from './ChannelsRedux';
import rootSaga from '../Sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

if (__DEV__) {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['channels'],
};

const channelsPersistConfig = {
  key: 'channels',
  storage: AsyncStorage,
  whitelist: ['favorite'],
};

const rootReducer = combineReducers({
  channels: persistReducer(channelsPersistConfig, channelReducer),
  // <- add new reducer here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};
