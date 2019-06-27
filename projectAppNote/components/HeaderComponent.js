import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DrawerActions } from 'react-navigation';

import {
    Text, View, Image, TouchableHighlight, Alert, StyleSheet, ScrollView, TouchableOpacity, Dimensions
} from 'react-native';

import SearchInput, { createFilter } from 'react-native-search-filter';
var { height, width } = Dimensions.get('window');
export default class HeaderComponent extends Component {
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
                    flex: 0.1
                }}>
                    <TouchableHighlight style={{ alignItems: 'center' }}
                        onPress={() => {
                            this.props.navigation.dispatch(DrawerActions.openDrawer());
                        }}>
                        <Icon name="list" size={30} color="white" />
                    </TouchableHighlight>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>Note</Text>
                </View>
                <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center' }}>
                        <SearchInput
                            //onChangeText={(term) => { this.searchUpdated(term) }}
                            style={styles.searchInput}
                            placeholder="Type a message to search"
                        />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight
                            onPress={() => {
                                Alert.alert('You long-pressed the button!')
                            }}>
                            <Icon name="search" size={20} color="white" />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight
                            onPress={() => {
                                Alert.alert('You long-pressed the button!')
                            }}>
                            <Icon name="sort-amount-asc" size={20} color="white" />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableHighlight
                            onPress={() => {
                                Alert.alert('You long-pressed the button!')
                            }}>
                            <Icon name="ellipsis-v" size={20} color="white" />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    emailItem: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput: {
        padding: 10,
        width: width / 2,
        borderColor: '#CCC',
        backgroundColor: 'white',
        marginLeft: 20,
        borderRadius: 20,
        borderWidth: 1
    }
});