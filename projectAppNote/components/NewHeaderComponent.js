import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from 'react-navigation';

import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

export default class NewHeaderComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 0.1,
                height: 60,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue',
                marginBottom: 5
            }}>
                <View style={{
                    flex: 0.2
                }}>
                    <TouchableHighlight style={{ alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.dispatch(DrawerActions.openDrawer());
                        }}>
                        <Icon name="list" size={30} color="white" />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'blue', fontSize: 18 }}>Note</Text>
                </View>
                <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: 'red' }}>

                </View>
            </View>
        );
    }
}