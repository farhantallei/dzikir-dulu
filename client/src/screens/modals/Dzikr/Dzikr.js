import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CountButton from '../../../components/Button/CountButton/CountButton.js';
import MainButton from '../../../components/Button/MainButton/MainButton.js';
import useStyles from './styles.js';

export default function Dzikr({navigation}) {
    const styles = useStyles();
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(state => state + 1);
    };

    const decrementCount = () => {
        if (count > 0)
            setCount(state => state - 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <MainButton label='back' marginBottom={35} onPress={() => navigation.goBack()} />
            <MainButton label='reset' backgroundColor='red' marginBottom={35} onPress={resetCount} />
            <MainButton label='-1' color='black' backgroundColor='yellow' marginBottom={35} onPress={decrementCount} />
            <CountButton count={count} onPress={incrementCount} />
        </View>
        </SafeAreaView>
    );
}
