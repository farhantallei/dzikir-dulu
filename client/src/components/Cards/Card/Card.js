import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import useStyles from './styles.js';

const Card = props => {
    const styles = useStyles(props);
    const [size, setSize] = useState(6);
    const [status, setStatus] = useState({ opacity: 0, animating: true });
    const [scale, setScale] = useState({ fontSize: 1, lineHeight: 1.6666666666666667 })
    const [cardHeight, setCardHeight] = useState();
    const [titleHeight, setTitleHeight] = useState();

    useEffect(() => {
        setScale({ fontSize: size, lineHeight: size*1.6666666666666667 });
    }, [size])

    const getHeight = e => {
        const { height } = e.nativeEvent.layout;

        if (height >= (cardHeight-titleHeight-24) || size >= 24) {
            setStatus({ opacity: 1, animating: false });
            console.log('a ' + height);
            console.log(cardHeight-titleHeight-24);
            return;
        }

        if (size < 24) {
            setSize(state => state + .5);
            console.log('b ' + height);
            return getHeight;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator animating={status.animating} />
                </View>
                <View style={{ ...styles.content, opacity: status.opacity }} onLayout={e => setCardHeight(e.nativeEvent.layout.height)}>
                    <View style={styles.arabicContainer}>
                        <Text style={{ ...styles.arabic, ...scale }} onLayout={getHeight}>
                            <Text>قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَهِ النَّاسِ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَ النَّاسِ</Text>
                        </Text>
                    </View>
                    <View style={styles.titleContainer} onLayout={e => setTitleHeight(e.nativeEvent.layout.height)}>
                        {/* <Text style={styles.title}>Ayat Kursi</Text> */}
                        <Text style={styles.title}>(QS. Al-Ikhlas: 1-4)</Text>
                    </View>
                </View>
            </View>
            <Text style={{ ...styles.source, opacity: status.opacity }}>HR. Muslim no. 2723</Text>
        </View>
    );
}

Card.propTypes = {
    
}

Card.defaultProps = {
    
}

export default Card;
