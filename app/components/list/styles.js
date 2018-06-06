import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
// StyleSheet.hairlineWidth,
export default EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: { fontSize: 16, color: '$darkText' },
  seperator: {
    backgroundColor: '$border',
    flex: 1,
    marginLeft: 20,
    height: 1,
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: { backgroundColor: '$primaryBlue' },
  checkIcon: {
    width: 18,
  },
});
