import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../themes/colors';

const MenScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Men</Text>
      <View style={styles.btns}>
        <PrimaryButton title="Unstitched" onPress={() => navigation.navigate('MenUnstitched')} />
        <PrimaryButton title="Stitched" onPress={() => navigation.navigate('MenStitched')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor: colors.cream, justifyContent:'center', alignItems:'center', padding:16 },
  title:{ fontSize:22, color: colors.brown, marginBottom:16, fontFamily:'RobotoSlab-Bold' },
  btns:{ width:'86%', gap:12 },
});

export default MenScreen;
