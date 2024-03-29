import React, {  useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';

import useStyles from './styles.js';

const MainButton = props => {
    const styles = useStyles(props);
    const [press, setPress] = useState(false);

    const disabled  = props.disabled;

    const onPressIn = () => {
        setPress(true);
    };

    const onPressOut = () => {
        setPress(false);
    };

    return (
        <View style={{ ...styles.container, ...props.style }}>
            <TouchableWithoutFeedback disabled={props.disabled} onPress={props.onPress} onPressOut={onPressOut} onPressIn={onPressIn}>
                <View style={styles.button} >
                    <View style={ disabled ? { ...styles.height, ...styles.heightPress } : (press ? { ...styles.height, ...styles.heightPress } : styles.height) }>
                        <View style={styles.inner}>
                            <Text style={styles.label}>{props.label}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

MainButton.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    flex: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    length: PropTypes.number,
    radius: PropTypes.number,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.number,
    textTransform: PropTypes.string,
}

MainButton.defaultProps = {
    disabled: false,
    label: 'button',
    flex: 0,
    color: '#ffffff',
    backgroundColor: '#007aff',
    marginTop: 0,
    marginBottom: 10,
    width: '100%',
    height: 45,
    length: 6,
    radius: 12,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
}

export default MainButton;
