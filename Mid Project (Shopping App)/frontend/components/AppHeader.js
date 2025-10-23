import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import colors from '../themes/colors';
import Logo from './Logo';

const AppHeader = ({ onPressMenu }) => {
  return (
    <View style={styles.wrap}>
      <Pressable testID="menuBtn" style={styles.menuBtn} onPress={onPressMenu}>
        <Image source={require('../assets/icons/menu.png')} style={styles.menuIcon} />
      </Pressable>
      <Logo size={22} textStyle={{ fontSize: 20 }} />
      <View style={styles.menuBtn} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    height: 90,
    // backgroundColor: colors.cream,     // ← cream behind the logo
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  menuBtn: { width: 50, height: 50, alignItems: 'center', justifyContent: 'center' },
  menuIcon: { width: 30, height: 30, tintColor: colors.brown, resizeMode: 'contain' },
});

export default AppHeader;
