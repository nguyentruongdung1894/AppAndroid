import React, { Component } from 'react';
import { Info } from '../screenNames';
import HeaderComponent from './HeaderComponent';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const backgroundColor = '#964f8e';
export default class CloudComponent extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     let drawerLabel = 'Cloud';
    //     let drawerIcon = () => (
    //         <Icon name="cloud" size={20} color="#0099FF" />
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
                    This is Cloud Screen
                </Text>                                
            </View>
        </View>);
    }
}