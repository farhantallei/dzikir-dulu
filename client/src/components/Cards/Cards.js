import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card/Card.js';
import useStyles from './styles.js';

const Cards = props => {
    const styles = useStyles(props);

    const getComponent = (component) => {
        switch (component) {
            case 0:
                return <Card />;
            case 1:
                return <Card />;
            case 2:
                return <Card />;
            case 3:
                return <Card />;
            case 4:
                return <Card />;
            default:
                return <Card />;
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {getComponent(props.page)}
        </View>
    )
}

Cards.propTypes = {
    page: PropTypes.number,
}

Cards.defaultProps = {
    page: 0,
}

export default Cards;
