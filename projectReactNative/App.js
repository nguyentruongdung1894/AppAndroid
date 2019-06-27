import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeActivity from './src/component/HomeActivity ';
import ProfileActivity from './src/component/ProfileActivity ';
import ManagerAuthen from './src/component/ManagerAuthen'

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeActivity },
    Profile: { screen: ProfileActivity },
    ManagerAuthen: { screen: ManagerAuthen }
  },
  {
    initialRouteName: 'Home',
  }

);
const AppContainer = createAppContainer(RootStack);
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}