import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../themes/colors';

const PerfumesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Perfumes</Text>
      <View style={styles.btns}>
        <PrimaryButton title="Male" onPress={() => navigation.navigate('PerfumesMale')} />
        <PrimaryButton title="Female" onPress={() => navigation.navigate('PerfumesFemale')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor: colors.cream, justifyContent:'center', alignItems:'center', padding:16 },
  title:{ fontSize:22, color: colors.brown, marginBottom:16, fontFamily:'RobotoSlab-Bold' },
  btns:{ width:'86%', gap:12 },
});

export default PerfumesScreen;
