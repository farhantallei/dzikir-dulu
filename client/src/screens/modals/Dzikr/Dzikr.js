import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CountButton from '../../../components/Button/CountButton/CountButton.js';
import MainButton from '../../../components/Button/MainButton/MainButton.js';
import ProgressBar from '../../../components/ProgressBar/ProgressBar.js';
import useStyles from './styles.js';

export default function Dzikr({navigation}) {
    const styles = useStyles();
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
        setProgress(count/100);
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
            <View style={{ height: 40, flexDirection: 'row' }}>
                <MainButton style={{ marginRight: 16 }} width={16} height={16} length={0} backgroundColor='#8e8e93' label='' marginBottom={0} onPress={() => navigation.goBack()} />
                <ProgressBar progress={progress} />
            </View>
            <View style={{ flex: 1, marginBottom: 24 }}>
                <View style={{ flexDirection: 'row', height: 54, justifyContent: 'center', marginHorizontal: 16 }}>
                    <View style={{ width: 70 }} />
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>baca</Text>
                        <Text style={{ fontSize: 24, fontWeight: '600' }}>3X</Text>
                    </View>
                    <View style={{ width: 70, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Text>
                            <Text style={{ fontSize: 24, fontWeight: '600' }}>2 </Text>
                            <Text style={{ fontSize: 18 }}>/ 18</Text>
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 24, paddingVertical: 36, borderRadius: 30, backgroundColor: '#f2f2f7' }}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'center', lineHeight: 40, marginBottom: 16, writingDirection: 'rtl' }}>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</Text>
                        <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'center', lineHeight: 40, marginBottom: 16, writingDirection: 'rtl' }}>قُلْ هُوَ اللهُ أَحَدٌ، اللهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ</Text>
                    </View>
                    <Text style={{ color: '#8E8E93', fontSize: 18, fontWeight: '500' }}>QS. Al-Ikhlas: 1-4</Text>
                </View>
            </View>
            <View style={{ height: 150, justifyContent: 'flex-end' }}>
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
        </SafeAreaView>
    );
}
