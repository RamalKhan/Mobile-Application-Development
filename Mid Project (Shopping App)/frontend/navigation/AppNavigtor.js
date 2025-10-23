import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';

import WomenScreen from '../screens/WomenScreen';
import WomenStitchedScreen from '../screens/WomenStitchedScreen';
import WomenUnstitchedScreen from '../screens/WomenUnstitchedScreen';

import MenScreen from '../screens/MenScreen';
import MenStitchedScreen from '../screens/MenStitchedScreen';
import MenUnstitchedScreen from '../screens/MenUnstitchedScreen';

import PerfumesScreen from '../screens/PerfumesScreen';
import PerfumesMaleScreen from '../screens/PerfumesMaleScreen';
import PerfumesFemaleScreen from '../screens/PerfumesFemaleScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Women" component={WomenScreen} />
        <Stack.Screen name="WomenStitched" component={WomenStitchedScreen} />
        <Stack.Screen name="WomenUnstitched" component={WomenUnstitchedScreen} />
        {/* Men */}
        <Stack.Screen name="Men" component={MenScreen} />
        <Stack.Screen name="MenStitched" component={MenStitchedScreen} />
        <Stack.Screen name="MenUnstitched" component={MenUnstitchedScreen} />

        {/* Perfumes */}
        <Stack.Screen name="Perfumes" component={PerfumesScreen} />
        <Stack.Screen name="PerfumesMale" component={PerfumesMaleScreen} />
        <Stack.Screen name="PerfumesFemale" component={PerfumesFemaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
