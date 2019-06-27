import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';

import { Home, Info, Settings, Cloud } from './screenNames';

import MenuDraw from './components/MenuDraw';

var { height, width } = Dimensions.get('window');

const DrawConfig = {
  drawerWidth: width * 0.43,
  initialRouteName: Home,
  order: [Home, Cloud, Settings, Info],
  contentComponent: props => <MenuDraw {...props} />
}
const RootStack = createDrawerNavigator(
  {
    Home: { screen: HomeComponent },
    Info: { screen: InfoComponent },
    Settings: { screen: SettingsComponent },
    Cloud: { screen: CloudComponent },
  },
  DrawConfig
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}