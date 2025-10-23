import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../themes/colors';

const PrimaryButton = ({ title, onPress, backgroundColor = colors.brown, textColor = colors.white, style, textStyle }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor }, style]}>
      <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  text: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    fontWeight: '800',
    letterSpacing: 0.2,
  },
});

export default PrimaryButton;
