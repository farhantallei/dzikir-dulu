import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { getPagiCollections, getPetangCollections } from './src/actions/collections.js';
import reducers from './src/reducers';
import Main from './src/routes/home.js';
import Dzikr from './src/screens/modals/Dzikr/Dzikr.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const RootStack = createStackNavigator();

function AppContainer() {
    const dispatch = useDispatch();
    const pagi = useSelector(state => state.pagi);
    const petang = useSelector(state => state.petang);

    useEffect(() => {
        dispatch(getPagiCollections());
        dispatch(getPetangCollections());
    }, [dispatch])

    return (
        <NavigationContainer>
            <RootStack.Navigator mode='modal' headerMode='none'>
                <RootStack.Screen name='Main' component={Main} />
                <RootStack.Screen name='Pagi' component={Dzikr} initialParams={{ collection: pagi }} options={{ cardStyle: { backgroundColor: 'white' }, gestureEnabled: false }} />
                <RootStack.Screen name='Petang' component={Dzikr} initialParams={{ collection: petang }} options={{ cardStyle: { backgroundColor: 'white' }, gestureEnabled: false }} />
            </RootStack.Navigator>
            <StatusBar style='auto' hidden={true} />
        </NavigationContainer>
    );
}

export default class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
