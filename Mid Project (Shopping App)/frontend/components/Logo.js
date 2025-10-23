import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../themes/colors';

const Logo = ({
  showText = true,           // set false if you want icon-only
  text = 'Autumn Chick',
  color = colors.brown,      // text color
  size = 20,                 // leaf icon size
  spacing = 6,               // gap between icon & text
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.row, style]}>
      <Image
        source={require('../assets/icons/leaf.png')}
        style={{ width: size, height: size, marginRight: showText ? spacing : 0 }}
        resizeMode="contain"
      />
      {showText && (
        <Text style={[styles.title, { color }, textStyle]}>
          {text}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  title: { fontFamily: 'RobotoSlab-Bold', fontSize: 18 },
});

export default Logo;
