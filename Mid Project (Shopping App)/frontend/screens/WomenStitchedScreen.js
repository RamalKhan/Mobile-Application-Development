import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  View, Text, Image, Pressable, StyleSheet } from 'react-native';
import AnnouncementBar from '../components/AnnouncementBar';
import colors from '../themes/colors';
import AppHeader from '../components/AppHeader';

export default function WomenStitchedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <AnnouncementBar text="Buy 3 Get 25% Off, Shop Now >>" />
  

      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Image source={require('../assets/icons/back.png')} style={styles.backIcon} />
        </Pressable>
        <Text style={styles.title}>Women • Stitched</Text>
        <View style={styles.backBtn} />
      </View>

      <View style={styles.grid}>
        <Image source={require('../assets/images/image1.jpg')} style={styles.img} />
        <Image source={require('../assets/images/image2.jpg')} style={styles.img} />
      </View>
      <View style={styles.grid}>
        <Image source={require('../assets/images/image3.jpg')} style={styles.img} />
        <Image source={require('../assets/images/image4.jpg')} style={styles.img} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor: colors.cream },
  header:{ height:56, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:12, backgroundColor: colors.cream },
  backBtn:{ width:40, height:40, alignItems:'center', justifyContent:'center' },
  backIcon:{ width:20, height:20, tintColor: colors.brown, resizeMode:'contain' },
  title:{ color: colors.brown, fontSize:18, fontFamily:'RobotoSlab-Bold' },
  grid:{ flexDirection:'row', justifyContent:'space-between', paddingHorizontal:16, marginTop:12 },
  img:{ width:'48%', aspectRatio:1, borderRadius:12, resizeMode:'cover' },
});
