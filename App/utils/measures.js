import {Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');
export const windowWidth = windowDimensions.width;
export const windowHeight = windowDimensions.height;
const width = windowWidth > windowHeight ? windowHeight : windowWidth;
export const resize = (size) => (width / 375) * size;
