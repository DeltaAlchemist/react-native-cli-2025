const { Dimensions } = require('react-native');
const { default: DeviceInfo } = require('react-native-device-info');

const { width, height } = Dimensions.get('window');

const isSmallDevice = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmallDevice) {
    return 330;
  }
  return 350;
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmallDevice) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);

export { horizontalScale, scaleFontSize, verticalScale };
