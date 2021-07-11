import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';

import MainButton from './src/components/Button/MainButton/MainButton.js';
import useStyles from './styles.js';

export default function App() {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <MainButton flex={0} label="Pagi" backgroundColor='#d68593' fontSize={48} length={8} radius={24} height={150} marginBottom={100} />
        <MainButton flex={0} label="Petang" backgroundColor='#6c5ce7' fontSize={48} length={8} radius={24} height={150} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
