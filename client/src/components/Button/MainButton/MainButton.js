import React, { useEffect, useState } from 'react';
import { Button, Text, TouchableWithoutFeedback, View, Alert } from 'react-native';
import Animated from 'react-native-reanimated';

import useStyles from './styles.js';

const MainButton = props => {
    const styles = useStyles(props);

    const [label, setLabel] = useState(props.label);
    const [alert, setAlert] = useState(props.alert);
    const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
    const [height, setHeight] = useState(props.height);
    const [length, setLength] = useState(props.length);

    const [press, setPress] = useState(false);

    const onPressIn = () => {
        setPress(true)
    };

    const pressesOut = () => {
        setPress(false)
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={props.onPress} onPressOut={pressesOut} onPressIn={onPressIn}>
                <View style={styles.button} >
                    <View style={ press ? { ...styles.height, ...styles.heightPress } : styles.height }>
                        <View style={ press ? { ...styles.inner, ...styles.innerPress } : styles.inner }>
                            <Text style={styles.label}>{label}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

MainButton.defaultProps = {
    flex: 1,
    color: '#ffffff',
    backgroundColor: '#007aff',
    marginTop: 0,
    marginBottom: 10,
    height: 45,
    length: 6,
    radius: 12,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
}

export default MainButton;