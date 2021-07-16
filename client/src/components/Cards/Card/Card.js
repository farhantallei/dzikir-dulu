import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import useStyles from './styles.js';

const Card = ({ props, data, page, collections }) => {
    const styles = useStyles(props);

    const fontStyle = {
        size: {
            fontSize: +collections[page].size || 21,
            lineHeight: +collections[page].size*1.666666666666667 || 35,
        },
        paragraph: {
            marginTop: +collections[page].size*.6 || 12,
        }
    }

    return (
        <View style={styles.container}>
            <View style={collections[page].title[0] === "" ? { ...styles.card, ...styles.noTitleCard } : styles.card}>
                <View style={styles.arabicContainer}>
                    {data.arabic.map((data, id) => <Text key={id} style={ (id === 1) ? { ...styles.arabic, ...fontStyle.paragraph, ...fontStyle.size } : { ...styles.arabic, ...fontStyle.size } }>{data}</Text>)}
                </View>
                {collections[page].title[0] === "" ? null : data.title.map((data, id) => <Text key={id} style={styles.title}>{data}</Text>)}
            </View>
            <Text style={styles.source}>{data.source}</Text>
        </View>
    );
}

export default Card;
