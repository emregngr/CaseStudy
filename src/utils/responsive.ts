import {Dimensions} from 'react-native';

const {width: deviceWidth, height: deviceHeight} = Dimensions.get('window');

const BaseWidth = deviceHeight < 600 ? 480 : 360;

const scale = (size: number) => (deviceWidth / BaseWidth) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const responsive = {
  fontSize: (size: number) =>
    moderateScale(size, deviceHeight < 600 ? 0.8 : 0.5),
  number: (n: number) => moderateScale(n, deviceHeight < 600 ? 0.5 : 1),
  deviceWidth,
  deviceHeight,
};
