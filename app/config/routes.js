import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/home';
import CurrencyList from '../screens/currency-list';

export default StackNavigator(
  {
    Home: { screen: Home, navigationOptions: { header: () => null } },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({ headerTitle: navigation.state.params.title }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
