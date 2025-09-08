import { StyleSheet } from 'react-native';
import { getFontFamily } from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#eff0f1ff',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: 10,
    height: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', 600),
  },
});

export default globalStyle;
