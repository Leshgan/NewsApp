import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {reducer as channelReducer} from './ChannelsRedux';
import {reducer as newsReducer} from './NewsRedux';
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
  blacklist: ['channels', 'news'],
};

const channelsPersistConfig = {
  key: 'channels',
  storage: AsyncStorage,
  whitelist: ['favorite'],
};

const newsPersistConfig = {
  key: 'news',
  storage: AsyncStorage,
  whitelist: ['list'],
};

const rootReducer = combineReducers({
  channels: persistReducer(channelsPersistConfig, channelReducer),
  news: persistReducer(newsPersistConfig, newsReducer),
  // <- add new reducer here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return {store, persistor};
};
