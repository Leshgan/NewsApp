import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  list: [],
  fetching: false,
  favorite: [],
});

export const types = {
  CHANNELS_FETCH_LIST: 'CHANNELS_FETCH_LIST',
  CHANNELS_SAVE_LIST: 'CHANNELS_SAVE_LIST',
};

export const actions = {
  fetchList: () => ({
    type: types.CHANNELS_FETCH_LIST,
  }),
  saveList: (payload) => ({
    type: types.CHANNELS_SAVE_LIST,
    payload,
  }),
};

export const reducer = (state, action) => {
  const {payload} = action;
  const oldState = state || INITIAL_STATE;

  switch (action.type) {
    case types.CHANNELS_FETCH_LIST: {
      return {
        ...oldState,
        fetching: true,
      };
    }
    case types.CHANNELS_SAVE_LIST: {
      return {
        ...oldState,
        list: payload,
        fetching: false,
      };
    }
    default: {
      return {...oldState};
    }
  }
};