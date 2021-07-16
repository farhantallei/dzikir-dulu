import React from 'react';
import { useDispatch } from 'react-redux';
import { SafeAreaView, View } from 'react-native';

import { getPagiCollections, getPetangCollections } from '../../../actions/collections.js';
import MainButton from '../../../components/Button/MainButton/MainButton.js';
import useStyles from './styles.js';

const Home = props => {
    const styles = useStyles();
    const navigation = props.navigation;
    const dispatch = useDispatch();

    const onPagi = () => {
        dispatch(getPagiCollections());
        navigation.navigate('Pagi');
    }

    const onPetang = () => {
        dispatch(getPetangCollections());
        navigation.navigate('Petang');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
                <MainButton flex={0} label="Pagi" backgroundColor='#d68593' fontSize={48} length={8} radius={24} height={150} marginBottom={100} onPress={onPagi} />
                <MainButton flex={0} label="Petang" backgroundColor='#6c5ce7' fontSize={48} length={8} radius={24} height={150} onPress={onPetang} />
            </View>
        </SafeAreaView>
    );
}

export default Home;