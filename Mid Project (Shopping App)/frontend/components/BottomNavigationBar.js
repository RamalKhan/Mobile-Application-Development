// frontend/components/BottomNavigationBar.js
import React from 'react';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import colors from '../themes/colors'; // <-- make sure folder name matches

const BottomNavigationBar = ({ navigation, active = 'Home' }) => {
  const tabs = [
    { key: 'Home', label: 'Home', icon: require('../assets/icons/home.png') },
    { key: 'Wishlist', label: 'Wishlist', icon: require('../assets/icons/heart.png') },
    { key: 'Cart', label: 'Cart', icon: require('../assets/icons/cart.png') },
    { key: 'Search', label: 'Search', icon: require('../assets/icons/search.png') },
    { key: 'Setting', label: 'Setting', icon: require('../assets/icons/setting.png') },
  ];

  return (
    <View style={styles.bar}>
      {tabs.map(tab => (
        <Pressable key={tab.key} onPress={() => navigation.navigate(tab.key)} style={styles.tab}>
          <Image
            source={tab.icon}
            style={[styles.icon, { tintColor: active === tab.key ? colors.brown : '#BCAAA4' }]}
          />
          <Text style={[styles.label, { color: active === tab.key ? colors.brown : '#BCAAA4' }]}>
            {tab.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.cream,
    height: 60,
    borderTopWidth: 1,
    borderColor: '#EADFCB',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tab: { alignItems: 'center', justifyContent: 'center' },
  icon: { width: 22, height: 22, marginBottom: 2 },
  label: { fontSize: 12, fontFamily: 'Roboto-Regular' },
});

export default BottomNavigationBar;
