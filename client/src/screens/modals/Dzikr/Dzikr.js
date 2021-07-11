import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import MainButton from '../../../components/Button/MainButton/MainButton.js';
import useStyles from './styles.js';

export default function Dzikr({navigation}) {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <MainButton flex={0} label="Close" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}
