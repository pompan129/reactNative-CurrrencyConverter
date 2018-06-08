import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/home';
import CurrencyList from '../screens/currency-list';
import Options from '../screens/options';
import Themes from '../screens/themes';

const HomeStack = StackNavigator(
  {
    Home: { screen: Home, navigationOptions: { header: () => null } },
    Options: {
      screen: Options,
      navigationOptions: { headerTitle: 'Options' },
    },
    Themes: {
      screen: Themes,
      navigationOptions: { headerTitle: 'Themes' },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({ headerTitle: navigation.state.params.title }),
  },
});

export default StackNavigator(
  {
    Home: { screen: HomeStack, navigationOptions: { header: () => null } },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none',
  },
);
