import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import useStyles from './styles.js';
import Animated from 'react-native-reanimated';

const ProgressBar = props => {
    const styles = useStyles(props);

    return (
        <View style={styles.bar}>
            <Animated.View style={{ ...styles.progress, ...props.style}} />
        </View>
    )
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    direction: PropTypes.string,
}

ProgressBar.defaultProps = {
    progress: 0,
    height: 16,
    direction: 'row',
    color: '#007aff',
    backgroundColor: '#f2f2f7',
    borderRadius: 8,
    opacity: 0,
}

export default ProgressBar;
