import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/routes/home.js';
import Dzikr from './src/screens/modals/Dzikr/Dzikr.js';

const RootStack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator mode='modal' headerMode='none'>
        <RootStack.Screen name='Main' component={Main} />
        <RootStack.Screen name='Dzikr' component={Dzikr} options={{ cardStyle: { backgroundColor: 'white' }, gestureEnabled: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
