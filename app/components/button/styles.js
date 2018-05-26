import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: { alignItems: 'center' },
  wrapper: { alignItems: 'center', flexDirection: 'row' },
  icon: { width: 20, marginRight: 10 },
  text: {
    fontSize: 14, fontWeight: '300', color: '$white', paddingVertical: 20,
  },
});
