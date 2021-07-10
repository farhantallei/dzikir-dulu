import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import useStyles from './styles.js';

export default function App() {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 36, fontWeight: '500' }}>Bismillah</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
