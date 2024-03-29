import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

import Card from './Card/Card.js';
import useStyles from './styles.js';

const Cards = ({ props, page, collections }) => {
    const styles = useStyles(props);
    
    const card = collections.map(data => (
        <Card data={data} props={props} page={page} collections={collections} timesTotal={data.timesTotal} source={data.source} />
    ))

    return (
        !collections.length ? (
        <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            </View>
            <View style={{ height: 51, width: '100%', paddingVertical: 14, paddingHorizontal: 56 }}>
                <View style={{ flex: 1, backgroundColor: props.backgroundColor, borderRadius: '50%' }} />
            </View>
        </View> ) : card[page]
    )
}

export default Cards;
