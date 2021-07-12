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
            <View style={{ height: 64, justifyContent: 'flex-end' }}>
                <MainButton label='back' marginBottom={0} onPress={() => navigation.goBack()} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#f2f2f7', marginVertical: 24 }}></View>
            </View>
            <View style={{ height: 150, marginBottom: 24, justifyContent: 'flex-end', paddingHorizontal: 8 }}>
                <View style={{ flexDirection: 'row', marginBottom: 15, justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 35 }}>
                        <MainButton label='' height={30} width={30} length={4} radius={15} backgroundColor={'orange'} marginBottom={0} onPress={decrementCount} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <MainButton label='' height={30} width={30} length={4} radius={15} backgroundColor={'red'} marginBottom={0} onPress={resetCount} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: .7, alignItems: 'center', justifyContent: 'center' }}>
                        <MainButton label='prev' color={'#8e8e93'} backgroundColor={'#f2f2f7'} marginBottom={0} onPress={() => {}} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <CountButton count={count} onPress={incrementCount} />
                    </View>
                    <View style={{ flex: .7, alignItems: 'center', justifyContent: 'center' }}>
                        <MainButton label='next' backgroundColor={'#34c759'} marginBottom={0} onPress={() => {}} />
                    </View>
                </View>
            </View>
        {/* <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <MainButton label='back' marginBottom={35} onPress={() => navigation.goBack()} />
                <MainButton label='reset' backgroundColor='red' marginBottom={35} onPress={resetCount} />
                <MainButton label='-1' color='black' backgroundColor='yellow' marginBottom={35} onPress={decrementCount} />
                <CountButton count={count} onPress={incrementCount} />
            </View> */}
        </SafeAreaView>
    );
}
