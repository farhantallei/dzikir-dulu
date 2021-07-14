import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import useStyles from './styles.js';

const Card = props => {
    const styles = useStyles(props);
    const [status, setStatus] = useState({ opacity: 1, animating: false });

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator animating={status.animating} />
                </View>
                <View style={{ ...styles.content, opacity: status.opacity }}>
                    <View style={styles.arabicContainer}>
                        <Text style={styles.arabic}>{props.arabic}</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{props.title}</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 24, minHeight: 51 }}>
                <Text style={{ ...styles.source, opacity: status.opacity }}>{props.source}</Text>
            </View>
        </View>
    );
}

Card.propTypes = {
    arabic: PropTypes.string,
    title: PropTypes.string,
    source: PropTypes.string,
    timesTotal: PropTypes.number,
}

Card.defaultProps = {
    arabic: 'بِسْمِ الله',
    title: '',
    source: 'Source',
    timesTotal: 1,
    backgroundColor: '#f2f2f7',
}

export default Card;
