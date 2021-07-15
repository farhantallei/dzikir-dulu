import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import useStyles from './styles.js';

const Card = ({ props, collection, page }) => {
    const styles = useStyles(props);
    const collections = useSelector(state => state.collections);

    return (
        <View style={styles.container}>
            <View style={collections[page].title[0] === "" ? { ...styles.card, paddingTop: 30, paddingBottom: 30 } : styles.card}>
                <View style={styles.arabicContainer}>
                    {collection.arabic.map((arabic, id) => <Text key={id} style={ (id === 1) ? {...styles.arabic, marginTop: 12} : styles.arabic }>{arabic}</Text>)}
                </View>
                {collections[page].title[0] === "" ? null : (
                <View style={styles.titleContainer}>
                    {collection.title.map((title, id) => <Text key={id} style={styles.title}>{title}</Text>)}
                </View>)}
            </View>
            <View style={styles.footer}>
                <Text style={styles.source}>{collection.source}</Text>
            </View>
        </View>
    );
}

export default Card;
