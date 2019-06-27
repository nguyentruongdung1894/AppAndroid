import React from 'react';
import { View, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { Home, Info, Settings, Cloud } from '../screenNames';
export default class MenuDraw extends React.Component {
    navLink(nav, text) {
        return (
            <TouchableOpacity style={{ height: 50 }} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                        <View style={styles.imgView}>
                            <Image style={styles.img} source={require('../assest/Vietnam.png')}></Image>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink(Home, 'Home')}
                    {this.navLink(Info, 'Info')}
                    {this.navLink(Settings, 'Settings')}
                    {this.navLink(Cloud, 'Cloud')}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    },
    topLinks: {
        height: 160,
        backgroundColor: 'black',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#777777'
    },
    imgView: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 50
    }

})