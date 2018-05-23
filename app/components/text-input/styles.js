import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$disabled',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    padding: 16,
    color: '$primaryBlue',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
  },
  border: { height: INPUT_HEIGHT, backgroundColor: '$border', width: StyleSheet.hairlineWidth },
});
