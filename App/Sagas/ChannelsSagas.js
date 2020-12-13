import {put, call, takeLatest} from 'redux-saga/effects';
import {actions, types} from '../Redux/ChannelsRedux';

function* getChannels(api) {
  try {
    const {data} = yield call([api, api.getChannels]);
    yield put(actions.saveList(data.sources));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchChannels(api) {
  yield takeLatest(types.CHANNELS_FETCH_LIST, getChannels, api);
}
