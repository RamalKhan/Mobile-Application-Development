import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './SignInScreen.styles';
import PrimaryButton from '../components/PrimaryButton';
import Logo from '../components/Logo';

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textBlock}>
          <Text style={styles.info}>
            You must be 18 or above to place an order, for customers aged 13–17
            please ask a parent or guardian for consent.
          </Text>
        </View>

        <View style={styles.btnWrap}>
          <PrimaryButton title="Login" onPress={() => navigation.navigate('Login')} />
          <PrimaryButton title="Create Account" onPress={() => navigation.navigate('Signup')} />
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Text style={styles.skip}>Skip for Now</Text>
          </Pressable>

        </View>
      </View>

      <View style={styles.brandArea}>
        <Logo size={50} textStyle={{ fontSize: 22 }} />
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
