import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

export default function App() {
  
  return (
    <NavigationContainer>
    <Router />
  </NavigationContainer>
  );
}

