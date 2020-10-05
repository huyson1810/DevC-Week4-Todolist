import React from 'react';
import { Text, View, Platform } from 'react-native';
import { 
  createStackNavigator, 
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import CompletedScreen from './screens/CompleteScreen';



const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const CompleteStack = createStackNavigator(
    {
      Complete: CompleteScreen
    },
    config
  );
  
CompleteStack.navigationOptions = {
    tabBarLabel: 'Complete',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-done-all' : 'md-link'}
        />
    )
};

CompleteStack.path = '';