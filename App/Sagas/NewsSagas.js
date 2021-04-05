import {put, call, takeLatest} from 'redux-saga/effects';
import {actions, types} from '../Redux/NewsRedux';

function* getNews(api, action) {
  const {payload} = action;
  try {
    const {data} = yield call([api, api.getNews], {channels: payload});
    yield put(actions.saveList(data.articles));
  } catch (e) {
    console.log(e, e.response);
  }
}

export default function* watchNews(api) {
  yield takeLatest(types.NEWS_FETCH_LIST, getNews, api);
}
