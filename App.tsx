/*
Figma Layout: https://www.figma.com/community/file/1082205502562354983 
Layout Author: Rama Sanjaya
React-Native Dev: Raphael Martins
*/
import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/screens/Global/theme';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//Components
import { Welcome } from './src/screens/Welcome';
import { SignIn } from './src/screens/SignIn';
import { SignUp } from './src/screens/SignUp';
import { ForgetPass } from './src/screens/ForgetPass';

import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light,
  OpenSans_400Regular
} from '@expo-google-fonts/open-sans';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light,
    OpenSans_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} />
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Welcome" >
              <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
              <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
              <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
              <Stack.Screen name="ForgetPass" component={ForgetPass} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
  );
}