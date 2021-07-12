import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CountButton from '../../../components/Button/CountButton/CountButton.js';
import MainButton from '../../../components/Button/MainButton/MainButton.js';
import useStyles from './styles.js';

export default function Dzikr({navigation}) {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <MainButton label='back' marginBottom={35} onPress={() => navigation.goBack()} />
        <CountButton onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
