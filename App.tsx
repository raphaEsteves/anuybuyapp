/*
Figma Layout: https://www.figma.com/community/file/1082205502562354983 
Layout Author: Rama Sanjaya
React-Native Dev: Raphael Martins
*/
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { Welcome } from './src/screens/Welcome';
import theme from './src/screens/Global/theme';

//Components

import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light,
  OpenSans_400Regular
} from '@expo-google-fonts/open-sans';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light,
    OpenSans_400Regular
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme = { theme }>
      <StatusBar barStyle={ 'light-content' }/>
      <Welcome />
    </ThemeProvider>
  );
}