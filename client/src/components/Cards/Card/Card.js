import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import useStyles from './styles.js';

const Card = ({ props, collection, page }) => {
    const styles = useStyles(props);
    const collections = useSelector(state => state.collections);

    return (
        <View style={styles.container}>
            <View style={collections[page].title[0] === "" ? { ...styles.card, ...styles.noTitleCard } : styles.card}>
                <View style={styles.arabicContainer}>
                    {collection.arabic.map((arabic, id) => <Text key={id} style={ (id === 1) ? { ...styles.arabic, ...styles.singleCard } : styles.arabic }>{arabic}</Text>)}
                </View>
                {collections[page].title[0] === "" ? null : collection.title.map((title, id) => <Text key={id} style={styles.title}>{title}</Text>)}
            </View>
            <Text style={styles.source}>{collection.source}</Text>
        </View>
    );
}

export default Card;
