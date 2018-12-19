import React from 'react';
import { Root, Icon } from 'native-base';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import TabSatu from './screens/tabsatu/';
import TabDua from './screens/tabdua/';

const SatuStack = createStackNavigator(
  {
    TabSatu: { screen: TabSatu }
  },
  {
    initialRouteName: 'TabSatu',
    headerMode: 'none'
  }
);

const DuaStack = createStackNavigator(
  {
    TabDua: { screen: TabDua }
  },
  {
    initialRouteName: 'TabDua',
    headerMode: 'none'
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    TabSatu: SatuStack,
    TabDua: DuaStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'TabSatu') {
          iconName = `ios-star${focused ? '' : '-outline'}`;
        } else if (routeName === 'TabDua') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        return <Icon name={iconName} size={horizontal ? 20 : 25} style={{ color: tintColor }} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#3F51B5',
      inactiveTintColor: '#000'
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
