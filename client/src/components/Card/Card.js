import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import useStyles from './styles.js';

const Card = props => {
    const styles = useStyles(props);
    const [size, setSize] = useState(6);
    const [status, setStatus] = useState({ opacity: 0, animating: true });
    const [scale, setScale] = useState({ fontSize: 1, lineHeight: 1.6666666666666667 })

    useEffect(() => {
        setScale({ fontSize: size, lineHeight: size*1.6666666666666667 });
    }, [size])

    const getHeight = e => {
        const { height } = e.nativeEvent.layout;
        // const { lineHeight } = styles.cardArabic;
        // const lines = Math.floor(height/lineHeight);
        
        // console.log('----------------------');
        // console.log('LineHeight: '+ (size*1.6666666666666667));
        // console.log('Size: '+ size);
        // console.log('Height: '+ height);
        // console.log('Lines: '+ lines);

        if (height >= 199) {
            setStatus({ opacity: 1, animating: false });
            return;
        }

        if (size < 24) {
            setSize(state => state + .5);
            return getHeight;
        }

        setStatus({ opacity: 1, animating: false });
        return getHeight;
    };

    return (
        <View style={styles.container}>
            <View style={styles.loadingContainer}>
                <ActivityIndicator animating={status.animating} />
            </View>
            <View style={{ ...styles.content, opacity: status.opacity }}>
                <View flex={1}>
                    {/* <Text style={styles.arabic}>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</Text> */}
                    <Text style={{ ...styles.arabic, ...scale }} onLayout={getHeight}>للهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ</Text>
                </View>
                <Text style={styles.source}>HR. Muslim no. 2723</Text>
            </View>
        </View>
    );
}

Card.propTypes = {
    
}

Card.defaultProps = {
    
}

export default Card;
