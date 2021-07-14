import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducers from './src/reducers';
import Main from './src/routes/home.js';
import Dzikr from './src/screens/modals/Dzikr/Dzikr.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const RootStack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack.Navigator mode='modal' headerMode='none'>
                <RootStack.Screen name='Main' component={Main} />
                <RootStack.Screen name='Dzikr' component={Dzikr} options={{ cardStyle: { backgroundColor: 'white' }, gestureEnabled: false }} />
                </RootStack.Navigator>
                <StatusBar style='auto' hidden={true} />
            </NavigationContainer>
        </Provider>
    );
}
