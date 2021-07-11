import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/stacks/Home/Home';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode='none'>
      <HomeStack.Screen name="Home" component={Home} options={{ cardStyle: { backgroundColor: 'white' } }} />
    </HomeStack.Navigator>
  );
}