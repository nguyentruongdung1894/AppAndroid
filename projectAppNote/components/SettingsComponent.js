import React, { Component } from 'react';
import { Info } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import CircleButton from 'react-native-circle-button';

const backgroundColor = '#e97600';
export default class SettingsComponent extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     let drawerLabel = 'Setting';
    //     let drawerIcon = () => (
    //         <Icon name="gears" size={20} color="#0099FF" />
    //     );
    //     return { drawerLabel, drawerIcon };
    // }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 0.9,
                    backgroundColor: backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                        This is Settings Screen
                </Text>
                </View>
            </View>
        );
    }
}