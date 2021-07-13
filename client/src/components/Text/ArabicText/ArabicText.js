import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import useStyles from './styles.js';

const ArabicText = props => {
    const styles = useStyles(props);
    const [size, setSize] = useState(1);
    const [status, setStatus] = useState({ opacity: 0, animating: true });

    const getHeight = e => {
        const { height } = e.nativeEvent.layout;
        // const { lineHeight } = styles.cardArabic;
        // const lines = Math.floor(height/lineHeight);
        
        // console.log('----------------------');
        // console.log('LineHeight: '+ (size*1.6666666666666667));
        // console.log('Size: '+ size);
        // console.log('Height: '+ height);
        // console.log('Lines: '+ lines);

        if (height >= 200) {
            setStatus({ opacity: 1, animating: false });
            return;
        };
        
        if (size < 24) {
            setSize(state => state + .3);
            return getHeight;
        }
        return getHeight;
    };

    const setScale = {
        fontSize: size,
        lineHeight: size*1.6666666666666667,
    }

    return (
        <View style={{ ...styles.card, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: '100%', width: '100%', position: 'absolute', justifyContent: 'center' }}>
                <ActivityIndicator animating={status.animating} />
            </View>
            <View style={{ ...styles.cardContent, opacity: status.opacity }}>
                <View style={{ flex: 1 }}>
                    {/* <Text style={styles.cardArabic}>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</Text> */}
                    <Text style={{ ...styles.cardArabic, ...setScale }} onLayout={getHeight}>للهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ</Text>
                </View>
                <Text style={styles.cardLabel}>HR. Muslim no. 2723</Text>
            </View>
        </View>
    );
}

ArabicText.propTypes = {
    
}

ArabicText.defaultProps = {
    
}

export default ArabicText;
