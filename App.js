import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./Screens/WelcomeScreen";
import MenuScreen from "./Screens/MenuScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}