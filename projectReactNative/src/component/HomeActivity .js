import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert, FlatList, Dimensions } from 'react-native';

//import Button from 'react-native-button';

//import flatListData from '../common/flatListData '

class HomeActivity extends React.Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.2, backgroundColor: 'red' }}>

                </View>
                <View style={{ flex: 0.4, backgroundColor: 'cyan' }}>

                </View>
                <View style={{ flex: 0.4, backgroundColor: 'olive' }}>
                    <TouchableOpacity
                        style={styles.touchableOpacity}
                        onPress={() => this.props.navigation.navigate('ManagerAuthen')}>
                        <Text style={{ color: 'white' }}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

});

export default HomeActivity;