import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../themes/colors';

const ProductCard = ({ image, title, price, onPress, onWish, onAdd }) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* Image + icons wrapped together */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.img} />

        {/* heart (bottom-left) */}
        <Pressable style={styles.badgeWhite} onPress={onWish}>
          <Image
            source={require('../assets/icons/heart.png')}
            style={styles.iconBrown}
          />
        </Pressable>

        {/* cart (bottom-right) */}
        <Pressable style={styles.badgeBrown} onPress={onAdd}>
          <Image
            source={require('../assets/icons/cart.png')}
            style={styles.iconWhite}
          />
        </Pressable>
      </View>

      {/* you can freely adjust this marginTop */}
      <Text numberOfLines={2} style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    marginRight: 20,
  },

  imageContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 12,
    overflow: 'hidden', // keep icons inside the round edges
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  badgeWhite: {
    position: 'absolute',
    bottom: 10, // stays fixed to image bottom
    left: 10,
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  badgeBrown: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor: colors.brown,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  iconBrown: {
    width: 18,
    height: 18,
    tintColor: colors.brown,
    resizeMode: 'contain',
  },

  iconWhite: {
    width: 18,
    height: 18,
    tintColor: colors.white,
    resizeMode: 'contain',
  },

  // you can now safely adjust spacing here
  title: {
    marginTop: 15,  // freely adjust this
    fontSize: 18,
    color: colors.Black,
    fontFamily: 'Roboto-Regular',
  },
  price: {
    marginTop: 4,
    fontSize: 18,
    color: colors.Black,
    fontFamily: 'RobotoSlab-Bold',
  },
});

export default ProductCard;
