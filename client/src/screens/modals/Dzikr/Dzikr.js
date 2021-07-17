import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import CircleButton from '../../../components/Button/CircleButton/CircleButton.js';
import CountButton from '../../../components/Button/CountButton/CountButton.js';
import MainButton from '../../../components/Button/MainButton/MainButton.js';
import ProgressBar from '../../../components/ProgressBar/ProgressBar.js';
import Cards from '../../../components/Cards/Cards.js';
import useStyles from './styles.js';

const Dzikr = props => {
    const styles = useStyles(props);
    const navigation = props.navigation;
    const title = props.route.name;
    const collections = props.route.params.collection || [];
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [progress, setProgress] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [countButtonColor, setCountButtonColor] = useState('#007aff');
    
    const maxPage = collections.length-1;
    const countTime = collections.map(data => data.timesTotal)[page];
    
    useEffect(() => {
        setProgress(count/countTime);
        count === 0 ? setOpacity(0) : setOpacity(1);
        if (count === countTime) {
            setCountButtonColor('#9ed953');
        } else {
            setCountButtonColor('#007aff');
        }
    }, [collections, count])

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
                <View style={styles.closeButton}>
                    <CircleButton icon='&#x2a2f;' fontSize={24} width={24} length={2} color='#e5e5ea' backgroundColor='#aeaeb2' onPress={() => navigation.goBack()} />
                </View>
                <ProgressBar progress={!collections.length ? 0 :progress} color={countButtonColor} opacity={opacity} />
            </View>
            <View style={styles.section}>
                <View style={styles.detail}>
                    <View style={styles.leftDetail}>
                        <Text style={styles.h2Med}>{title}</Text>
                    </View>
                    {!collections.length ? (
                    <View style={{ ...styles.centerDetail, ...styles.centerLoadingContainer }}>
                        <View style={styles.loadingBox} />
                    </View>) : (
                    <View style={styles.centerDetail}>
                        <Text style={styles.pMed}>baca</Text>
                        <Text style={styles.h1Sem}>{`${countTime}X`}</Text>
                    </View>)}
                    {!collections.length ? (
                    <View style={{ ...styles.rightDetail, ...styles.rightLoadingContainer }}>
                        <View style={styles.loadingBox} />
                    </View>) : (
                    <View style={styles.rightDetail}>
                        <Text>
                            <Text style={styles.h1Sem}>{page+1} </Text>
                            <Text style={styles.pNor}>/ {maxPage+1}</Text>
                        </Text>
                    </View>)}
                </View>
                <Cards collections={collections} page={page} props={props} />
            </View>
            <View style={styles.footer}>
                <View style={styles.moreActionContainer}>
                    <View style={styles.subtractAction}>
                        <CircleButton disabled={!collections.length ? true : false} icon={!collections.length ? '' : '\u2013'} backgroundColor={!collections.length ? props.backgroundColor : '#ffcc00'} onPress={decrementCount} />
                    </View>
                    <View style={styles.resetAction}>
                        <CircleButton disabled={!collections.length ? true : false} icon={!collections.length ? '' : '\u21BA'} backgroundColor={!collections.length ? props.backgroundColor : '#ff9500'} onPress={resetCount} />
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.prevNextAction}>
                        <MainButton disabled={page === 0 || !collections.length ? true : false} label={!collections.length ? '' : 'prev'} color={'#8e8e93'} backgroundColor={'#f2f2f7'} marginBottom={0} onPress={prevPage} />
                    </View>
                    <View style={styles.centerAction}>
                        <CountButton disabled={count === countTime || !collections.length ? true : false} count={!collections.length ? '' : (count === countTime ? '\u2713' : count)} backgroundColor={!collections.length ? props.backgroundColor : countButtonColor} onPress={incrementCount} />
                    </View>
                    <View style={styles.prevNextAction}>
                        <MainButton disabled={page === maxPage || !collections.length ? true : false} label={!collections.length ? '' : (page === maxPage ? 'done' : 'next')} color={page === maxPage ? '#8e8e93' : (count === countTime ? '#ffffff' : '#8e8e93')} backgroundColor={page === maxPage ? '#f2f2f7' : (count === countTime ? '#9ed953' : '#f2f2f7')} marginBottom={0} onPress={nextPage} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

Dzikr.propTypes = {
    page: PropTypes.number,
}

Dzikr.defaultProps = {
    page: 0,
    backgroundColor: '#f2f2f7',
}

export default Dzikr;
