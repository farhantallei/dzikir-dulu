import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CountButton from '../../../components/Button/CountButton/CountButton.js';
import MainButton from '../../../components/Button/MainButton/MainButton.js';
import ProgressBar from '../../../components/ProgressBar/ProgressBar.js';
import Cards from '../../../components/Cards/Cards.js';
import useStyles from './styles.js';

export default function Dzikr({navigation}) {
    const styles = useStyles();
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [countButtonColor, setCountButtonColor] = useState('#007aff');
    
    const maxPage = 17;
    const countTime = 3;
    
    useEffect(() => {
        setProgress(count/countTime);
        count === 0 ? setOpacity(0) : setOpacity(1);
        if (count === countTime) {
            setCountButtonColor('#9ed953');
        } else {
            setCountButtonColor('#007aff');
        }
    }, [count])

    const incrementCount = () => {
        if (count !== countTime) setCount(state => state + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(state => state - 1);
        }
    };

    const resetCount = () => {
        setCount(0);
    };

    const prevPage = () => {
        if (page > 0)
            setPage(state => state - 1);
        
        setCount(0);
    }

    const nextPage = () => {
        if (page < maxPage) {
            setPage(state => state+1);
            setCount(0);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <MainButton label='&#x2a2f;' fontSize={24} width={24} height={24} length={0} color='#e5e5ea' backgroundColor='#aeaeb2' marginBottom={0} style={{ marginRight: 16 }} onPress={() => navigation.goBack()} />
                <ProgressBar progress={progress} color={countButtonColor} opacity={opacity} />
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
                            <Text style={styles.h1Sem}>{page+1} </Text>
                            <Text style={styles.pNor}>/ 18</Text>
                        </Text>
                    </View>
                </View>
                <Cards page={page} />
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
                        <MainButton disabled={page === 0 ? true : false} label='prev' color={'#8e8e93'} backgroundColor={'#f2f2f7'} marginBottom={0} onPress={prevPage} />
                    </View>
                    <View style={styles.centerAction}>
                        <CountButton disabled={count === countTime ? true : false} count={count === countTime ? '\u2713' : count} backgroundColor={countButtonColor} onPress={incrementCount} />
                    </View>
                    <View style={styles.prevNextAction}>
                        <MainButton disabled={page === maxPage ? true : false} label={page === maxPage ? 'done' : 'next'} color={page === maxPage ? '#8e8e93' : (count === countTime ? '#ffffff' : '#8e8e93')} backgroundColor={page === maxPage ? '#f2f2f7' : (count === countTime ? '#9ed953' : '#f2f2f7')} marginBottom={0} onPress={nextPage} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
