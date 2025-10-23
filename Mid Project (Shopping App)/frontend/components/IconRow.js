import React from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import colors from '../themes/colors';

const IconRow = ({ onSearch, onWishlist, onProfile, onCart }) => (
  <View style={styles.row}>
    <Pressable style={styles.btn} onPress={onSearch}>
      <Image source={require('../assets/icons/search.png')} style={styles.icon} />
    </Pressable>
    <Pressable style={styles.btn} onPress={onWishlist}>
      <Image source={require('../assets/icons/heart.png')} style={styles.icon} />
    </Pressable>
    <Pressable style={styles.btn} onPress={onProfile}>
      <Image source={require('../assets/icons/user.png')} style={styles.icon} />
    </Pressable>
    <Pressable style={styles.btn} onPress={onCart}>
      <Image source={require('../assets/icons/cart.png')} style={styles.icon} />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  row: {
    height: 74,
    // backgroundColor: colors.cream,     // same cream row
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderColor: '#EADFCB',
  },
  btn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  icon: { width: 25, height: 25, tintColor: colors.brown, resizeMode: 'contain' },
});

export default IconRow;
