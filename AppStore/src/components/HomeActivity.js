import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert, FlatList, Dimensions } from 'react-native';

import Button from 'react-native-button';

import flatListData from '../common/flatLishHome'

class FlatListData extends React.Component {
    render() {
        var screenWidth = Dimensions.get('window').width;
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'flex-start',
                    width: screenWidth, margin: 4, backgroundColor: 'white'
                }}>
                    <View style={{ flex: 0.2, alignItems: 'center' }}>
                        <Image style={{ width: 60, height: 60, marginTop: 13 }} source={require('../assets/image/Icon023.png')}></Image>
                    </View>
                    <View style={{ flex: 0.6, flexDirection: 'column', padding: 5, alignItems: 'center' }}>
                        <View style={{ flex: 1 }}><Text style={styles.text}>{this.props.item.name}</Text></View>
                        <View style={{ flex: 1 }}><Text style={styles.text}>{this.props.item.description}</Text></View>
                    </View>
                    <View style={{ flex: 0.2, flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => { Alert.alert('Enter button!') }}>
                            <Text style={styles.text}>NHẬN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'flex-start',
                    width: screenWidth, margin: 4, backgroundColor: 'white'
                }}>
                    <View style={{ flex: 0.2, alignItems: 'center' }}>
                        <Image style={{ width: 60, height: 60, marginTop: 13 }} source={require('../assets/image/Admin-256.png')}></Image>
                    </View>
                    <View style={{ flex: 0.6, flexDirection: 'column', padding: 5, alignItems: 'center' }}>
                        <View style={{ flex: 1 }}><Text style={styles.text}>{this.props.item.name}</Text></View>
                        <View style={{ flex: 1 }}><Text style={styles.text}>{this.props.item.description}</Text></View>
                    </View>
                    <View style={{ flex: 0.2, flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => { Alert.alert('Enter button!') }}>
                            <Text style={styles.text}>NHẬN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row', justifyContent: 'flex-start',
                    width: screenWidth, margin: 4, backgroundColor: 'white'
                }}>
                    <View style={{ flex: 0.2, alignItems: 'center' }}>
                        <Image style={{ width: 60, height: 60, marginTop: 13 }} source={require('../assets/image/arhitect_256.png')}></Image>
                    </View>
                    <View style={{ flex: 0.6, flexDirection: 'column', padding: 5, alignItems: 'center' }}>
                        <View style={{ flex: 1 }}><Text style={styles.text}>{this.props.item.name}</Text></View>
                        <View style={{ flex: 1 }}><Text style={styles.text}>{this.props.item.description}</Text></View>
                    </View>
                    <View style={{ flex: 0.2, flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => { Alert.alert('Enter button!') }}>
                            <Text style={styles.text}>NHẬN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

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
        var screenWidth = Dimensions.get('window').width;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.9 }}>
                    <ScrollView>
                        <View style={{ borderColor: 'silver', borderWidth: 1, marginTop: 20 }}></View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ height: 300 }}>
                                <FlatList
                                    style={{
                                        backgroundColor: 'white',
                                    }}
                                    horizontal={true}
                                    data={[{ key: '' }, { key: '' }, { key: '' }, { key: '' }, { key: '' }]}
                                    renderItem={({ item }) =>
                                        <View style={{ width: screenWidth, borderLeftWidth: 1, borderLeftColor: 'silver', alignItems: 'center' }}>
                                            <Text>{item.key}</Text>
                                            <Image source={require('../assets/image/arhitect_256.png')}></Image>
                                        </View>
                                    }
                                />
                            </View>
                        </View>
                        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 15, marginTop: 20 }}></View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-between' }}>
                                    <View style={{ flex: 0.7, height: 50 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Chúng Tôi Thích Trò Này</Text>
                                    </View>
                                    <View style={{ flex: 0.3, height: 50 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 15, color: 'blue' }}>Xem Tất Cả</Text>
                                    </View>
                                </View>
                                <View style={{}}>
                                    <FlatList
                                        horizontal={true}
                                        data={flatListData}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <FlatListData item={item} index={index}>

                                                </FlatListData>
                                            );
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 15 }}></View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-between' }}>
                                    <View style={{ flex: 0.7, height: 50 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Chúng Tôi Thích Trò Này</Text>
                                    </View>
                                    <View style={{ flex: 0.3, height: 50 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 15, color: 'blue' }}>Xem Tất Cả</Text>
                                    </View>
                                </View>
                                <View style={{}}>
                                    <FlatList
                                        horizontal={true}
                                        data={flatListData}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <FlatListData item={item} index={index}>

                                                </FlatListData>
                                            );
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ borderColor: 'silver', borderWidth: 1, margin: 15 }}></View>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{}}>
                                <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-between' }}>
                                    <View style={{ flex: 0.7, height: 50 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Chúng Tôi Thích Trò Này</Text>
                                    </View>
                                    <View style={{ flex: 0.3, height: 50 }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', margin: 15, color: 'blue' }}>Xem Tất Cả</Text>
                                    </View>
                                </View>
                                <View style={{}}>
                                    <FlatList
                                        horizontal={true}
                                        data={flatListData}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <FlatListData item={item} index={index}>

                                                </FlatListData>
                                            );
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ borderColor: 'silver', borderWidth: 1 }}></View>
                    </ScrollView>
                </View>

                <View style={styles.container}>
                    <View style={styles.viewTouchableOpacity}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/image/Icon023.png')}></Image>
                            <Text style={styles.text}>Home</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTouchableOpacity}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/image/Icon024.png')}></Image>
                            <Text style={styles.text}>Game</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTouchableOpacity}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/image/Icon025.png')}></Image>
                            <Text style={styles.text}>App</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTouchableOpacity}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/image/Icon026.png')}></Image>
                            <Text style={styles.text}>Update</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTouchableOpacity}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/image/Icon027.png')}></Image>
                            <Text style={styles.text}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
    },
    viewTouchableOpacity: {
        flex: 1,
    },
    touchableOpacity: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5
    },
    text: {
        textAlign: 'center'
    },
});

export default HomeActivity;