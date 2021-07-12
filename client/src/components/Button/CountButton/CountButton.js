import React, { useEffect, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';

import useStyles from './styles.js';

const CountButton = props => {
    const styles = useStyles(props);
    const [press, setPress] = useState(false);
    const [topLengthRadius, setTopLengthRadius] = useState(0);
    
    useEffect(() => {
        const width = props.width;
        const length = props.length;
        const getBorderTopRadius = `${(((width/2)-length)/(width/2))/2*100}%`;

        setTopLengthRadius(getBorderTopRadius);
    }, [topLengthRadius])

    
    const setTopRadius = {
        borderTopLeftRadius: topLengthRadius,
        borderTopRightRadius: topLengthRadius,
    }

    const onPressIn = () => {
        setPress(true);
    };

    const onPressOut = () => {
        setPress(false);
    };

    return (
        <TouchableWithoutFeedback onPress={props.onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            <View style={ press ? { ...styles.button, ...setTopRadius, ...styles.buttonPress } : { ...styles.button, ...setTopRadius } }>
                <View style={ press ? { ...styles.height, ...styles.heightPress } : styles.height }>
                    <View style={styles.inner}>
                        <Text style={styles.label}>{props.count}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

CountButton.propTypes = {
    count: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.number,
    length: PropTypes.number,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.number,
    textTransform: PropTypes.string,
}

CountButton.defaultProps = {
    count: 0,
    color: '#ffffff',
    backgroundColor: '#007aff',
    width: 100,
    length: 6,
    fontWeight: 'bold',
    fontSize: 36,
    textTransform: 'uppercase',
}

export default CountButton;