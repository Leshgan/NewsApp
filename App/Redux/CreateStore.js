import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {reducer as channelReducer} from './ChannelsRedux';
import rootSaga from '../Sagas';

const rootReducer = combineReducers({
  channels: channelReducer,
  // <- add new reducer here
});
const sagaMiddleware = createSagaMiddleware();

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
