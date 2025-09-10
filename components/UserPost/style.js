import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
  grayishBlue: '#79869F',
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#EFF2F6',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    textAlign: 'left',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 2,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 12,
  },
  userPostStats: { marginLeft: 10, flexDirection: 'row' },
  userPostStatsButton: { flexDirection: 'row' },
  userPostStatsButtonRight: { flexDirection: 'row', marginLeft: 27 },
  userPostStatsText: { marginLeft: 3, color: '#79869F' },
});

export default style;
