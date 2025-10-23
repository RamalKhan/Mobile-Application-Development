import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  Text, StyleSheet } from 'react-native';
import colors from '../themes/colors';

const MenStitchedScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Men • Stitched</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor: colors.cream, justifyContent:'center', alignItems:'center' },
  text:{ color: colors.brown, fontSize:20, fontFamily:'RobotoSlab-Bold' },
});

export default MenStitchedScreen;
