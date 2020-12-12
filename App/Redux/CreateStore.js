import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as channelReducer} from './ChannelsRedux';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  channels: channelReducer,
});

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(logger));
};
