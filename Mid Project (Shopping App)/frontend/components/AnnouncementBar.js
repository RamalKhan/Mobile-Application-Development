import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../themes/colors';

const AnnouncementBar = ({
  text = 'Buy 2 Get 25% OFF on your first order',
}) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.msg} numberOfLines={1}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    backgroundColor: '#EEd98E', // soft cream-tan
    paddingVertical: 15,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  msg: {
    fontSize: 18,
    color: colors.Black,
    fontFamily: 'Roboto-Regular',
  },
});

export default AnnouncementBar;
