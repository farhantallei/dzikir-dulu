import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Card from './Card/Card.js';
import useStyles from './styles.js';

const Cards = props => {
    const styles = useStyles(props);
    const collections = useSelector(state => state.collections);

    // console.log(collections);

    // const [page, setPage] = useState(props.page);

    // const card = [
    //     (<Card timesTotal={1} source='HR. Al Hakim (1: 562)' title='(QS. Al-Baqarah: 255)' arabic='للهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ' />),
    //     (<Card timesTotal={3} source='HR. Abu Daud no. 5082 dan Tirmidzi no. 3575' title='(QS. Al-Ikhlas: 1-4)' arabic='قُلْ هُوَ اللهُ أَحَدٌ، اللهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ' />),
    //     (<Card timesTotal={3} source='HR. Abu Daud no. 5082 dan Tirmidzi no. 3575' title='(QS. Al-Falaq: 1-5)' arabic='قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ' />),
    //     (<Card timesTotal={3} source='HR. Abu Daud no. 5082 dan Tirmidzi no. 3575' title='(QS. An-Naas: 1-6)' arabic='قُلْ أَعُوذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، إِلَهِ النَّاسِ، مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ، مِنَ الْجِنَّةِ وَ النَّاسِ' />),
    //     (<Card timesTotal={1} source='HR. Muslim no. 2723' arabic='أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ' />),
    //     (<Card timesTotal={1} source='HR. Tirmidzi no. 3391 dan Abu Daud no. 5068' arabic='اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ' />),
    // ];

    // TODO: WARNING! Use redux in each Card!
    const card = collections.map(data => (
        <Card timesTotal={data.timesTotal} source={data.source} title={data.title.map(title => `${title}`)} arabic={data.arabic.map(arabic => `${arabic}`)} />
    ))

    // console.log(collections.map(d => d.title.map(title => `${title}\n`)));

    return (
        <View style={{ flex: 1 }}>
            {card[props.page]}
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
