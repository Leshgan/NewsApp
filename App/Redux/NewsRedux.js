import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  list: [],
  fetching: false,
});

export const types = {
  NEWS_FETCH_LIST: 'NEWS_FETCH_LIST',
  NEWS_SAVE_LIST: 'NEWS_SAVE_LIST',
  NEWS_REMOVE_ITEMS: 'NEWS_REMOVE_ITEMS',
};

export const actions = {
  fetchList: (payload) => ({
    type: types.NEWS_FETCH_LIST,
    payload,
  }),
  saveList: (payload) => ({
    type: types.NEWS_SAVE_LIST,
    payload,
  }),
  removeItems: (payload) => ({
    type: types.NEWS_REMOVE_ITEMS,
    payload,
  }),
};

export const reducer = (state, action) => {
  const {payload} = action;
  const oldState = state || INITIAL_STATE;

  switch (action.type) {
    case types.NEWS_FETCH_LIST: {
      return {
        ...oldState,
        fetching: true,
      };
    }
    case types.NEWS_SAVE_LIST: {
      return {
        ...oldState,
        list: payload,
        fetching: false,
      };
    }
    case types.NEWS_REMOVE_ITEMS: {
      const {list: oldNews} = state;
      return {
        ...oldState,
        list: oldNews.filter(({id}) => payload.includes(id)),
      };
    }
    default: {
      return {...oldState};
    }
  }
};
