import React, { Component } from 'react';
import { Info } from '../screenNames';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
const backgroundColor = '#007256';

export default class InfoComponent extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     let drawerLabel = 'Info';
    //     let drawerIcon = () => (
    //         <Icon name="info" size={20} color="#0099FF" />
    //     );
    //     return { drawerLabel, drawerIcon };
    // }
    render() {
        return (<View style={{
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
                    This is Info Screen
                </Text>
                <TouchableHighlight style={{
                    margin: 20,
                    width: 200,
                    height: 45,
                    backgroundColor: 'darkviolet',
                    padding: 10,
                    alignItems: 'center',
                }}
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Back to Home</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}