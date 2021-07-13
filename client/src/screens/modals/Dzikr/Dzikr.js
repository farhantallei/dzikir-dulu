import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CountButton from '../../../components/Button/CountButton/CountButton.js';
import MainButton from '../../../components/Button/MainButton/MainButton.js';
import ProgressBar from '../../../components/ProgressBar/ProgressBar.js';
import Card from '../../../components/Card/Card.js';
import useStyles from './styles.js';

export default function Dzikr({navigation}) {
    const styles = useStyles();
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState(0);
    
    useEffect(() => {
        setProgress(count/100);
        count === 0 ? setOpacity(0) : setOpacity(1);
    }, [count])

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
            <View style={styles.header}>
                <MainButton label='&#x2a2f;' fontSize={24} width={24} height={24} length={0} color='#e5e5ea' backgroundColor='#aeaeb2' marginBottom={0} style={{ marginRight: 16 }} onPress={() => navigation.goBack()} />
                <ProgressBar progress={progress} opacity={opacity} />
            </View>
            <View style={styles.section}>
                <View style={styles.detail}>
                    <View style={styles.leftDetail} />
                    <View style={styles.centerDetail}>
                        <Text style={styles.pMed}>baca</Text>
                        <Text style={styles.h1Sem}>3X</Text>
                    </View>
                    <View style={styles.rightDetail}>
                        <Text>
                            <Text style={styles.h1Sem}>2 </Text>
                            <Text style={styles.pNor}>/ 18</Text>
                        </Text>
                    </View>
                </View>
                <Card />
            </View>
            <View style={styles.footer}>
                <View style={styles.moreActionContainer}>
                    <View style={styles.subtractAction}>
                        <MainButton label='&#x2013;' height={30} width={30} length={4} radius={15} backgroundColor={'#ffcc00'} marginBottom={0} onPress={decrementCount} />
                    </View>
                    <View style={styles.resetAction}>
                        <MainButton label='&#x21ba;' height={30} width={30} length={4} radius={15} backgroundColor={'#ff9500'} marginBottom={0} onPress={resetCount} />
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.prevNextAction}>
                        <MainButton label='prev' color={'#8e8e93'} backgroundColor={'#f2f2f7'} marginBottom={0} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={styles.centerAction}>
                        <CountButton count={count} onPress={incrementCount} />
                    </View>
                    <View style={styles.prevNextAction}>
                        <MainButton label='next' color={'#8e8e93'} backgroundColor={'#f2f2f7'} marginBottom={0} onPress={() => {}} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
