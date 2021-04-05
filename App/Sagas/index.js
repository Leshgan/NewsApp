import {all} from 'redux-saga/effects';
import watchChannels from './ChannelsSagas';
import watchNews from './NewsSagas';
import Api from '../Services/Api';

const api = Api();

export default function* rootSaga() {
  yield all([watchChannels(api), watchNews(api)]);
}
