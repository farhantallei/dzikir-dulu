import React from 'react';
import { SafeAreaView, View } from 'react-native';

import MainButton from '../../../components/Button/MainButton/MainButton.js';
import useStyles from './styles.js';

export default function Home({navigation}) {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <MainButton flex={0} label="Pagi" backgroundColor='#d68593' fontSize={48} length={8} radius={24} height={150} marginBottom={100} onPress={() => navigation.navigate('Dzikr')} />
        <MainButton flex={0} label="Petang" backgroundColor='#6c5ce7' fontSize={48} length={8} radius={24} height={150} onPress={() => navigation.navigate('Dzikr')} />
      </View>
    </SafeAreaView>
  );
}
