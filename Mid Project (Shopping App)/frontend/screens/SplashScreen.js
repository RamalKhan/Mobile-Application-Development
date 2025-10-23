// /frontend/screens/SplashScreen.js
import React from 'react';
import { View, ImageBackground, Text, Pressable, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './SplashScreen.styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('../assets/images/splash.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.9)', 'transparent']}
          locations={[0, 0.4, 1]}
          start={{ x: 0.5, y: 1 }}   // start from bottom center
          end={{ x: 0.5, y: 0 }}     // end at top center
          style={styles.overlay}
        />

        <View style={styles.content}>
          <Text allowFontScaling={false} style={styles.title}>SNUGGLE INTO{'\n'}COMFORT</Text>
          <Text allowFontScaling={false} style={styles.subtitle}>Discover Cozy Elegance. Shop Now!</Text>

          <Pressable style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttonText}>Get Comfy</Text>
            <Image source={require('../assets/icons/arrow-right.png')} style={styles.icon} />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;
