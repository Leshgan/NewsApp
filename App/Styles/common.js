import {resize} from '../utils/measures';

export const colors = {
  mainBackgroundColor: '#5D1049',
};

export const common = {
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainBackgroundColor,
    paddingTop: resize(10),
  },
};
