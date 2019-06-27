import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from "react-native";

import Button from 'react-native-button';

import { getHeaderFromServer } from '../server/Server';
import { getInfoFromServer } from '../server/Server';

class ManagerAuthen extends React.Component {
    static navigationOptions = {
        //tieu de
        title: "QUẢN LÝ XÁC THỰC",
        headerStyle: {
            backgroundColor: "#03A9F4",
        },
        //mau chu
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = ({
            headerFromServer: []
        });
        this.state = ({
            infoServer: []
        });
        this.state = ({
            updateCount: 0,
            numberOfRefresh: 0
        });
        //this.refreshData = this.refreshData.bind(this);
        //this.renderFlashList = this.renderFlashList.bind(this);
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer() {
        // .then la lay du lieu thanh cong .catch la lay du lieu bi loi
        getHeaderFromServer().then((header) => {
            this.setState({ headerFromServer: header });
        }).catch((error) => {
            this.setState({ headerFromServer: [] });
        });
        getInfoFromServer().then((info) => {
            this.setState({ infoServer: info });
        }).catch((error) => {
            this.setState({ infoServer: [] });
        });
    }

    render() {
        var screenWidth = Dimensions.get('window').width;
        return (
            <View style={{ backgroundColor: '#DDDDDD', flex: 1 }}>
                <View style={{ flex: 0.1, flexDirection: 'row', marginBottom: 5 }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={styles.text}>CHỜ DUYỆT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={styles.text}>ĐÃ DUYỆT</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={styles.text}>TỪ CHỐI</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 0.9, flexDirection: 'column' }}>
                    <View style={{ height: 150, marginBottom: 5, backgroundColor: 'white', padding: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View><Text style={styles.text}>Thời gian gửi yêu cầu: </Text></View>
                            <View><Text>15:33 27/05.2019</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View><Text style={styles.text}>Tài khoản: </Text></View>
                            <View><Text>Nguyễn Duy Khánh - 0365894125</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View><Text style={styles.text}>Người giới thiệu: </Text></View>
                            <View><Text>Nguyễn Bích Thủy - 0986354125</Text></View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <View>
                                <Button style={{
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    borderRadius: 20,
                                    margin: 5, color: 'white', backgroundColor: '#DDDDDD',
                                    textAlign: 'center', alignItems: 'center'
                                }}>
                                    Từ chối
                                </Button>
                            </View>
                            <View>
                                <Button style={{
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    borderRadius: 20,
                                    margin: 5, color: 'white', backgroundColor: '#03A9F4',
                                    textAlign: 'center', alignItems: 'center'
                                }}>
                                    Đồng ý
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 150, marginBottom: 5, backgroundColor: 'white', padding: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View><Text style={styles.text}>Thời gian gửi yêu cầu: </Text></View>
                            <View><Text>15:33 27/05.2019</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View><Text style={styles.text}>Tài khoản: </Text></View>
                            <View><Text>Nguyễn Duy Khánh - 0365894125</Text></View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View><Text style={styles.text}>Người giới thiệu: </Text></View>
                            <View><Text>Nguyễn Bích Thủy - 0986354125</Text></View>
                        </View>
                        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <View>
                                <Button style={{
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    borderRadius: 20,
                                    margin: 5, color: 'white', backgroundColor: '#DDDDDD',
                                    textAlign: 'center', alignItems: 'center'
                                }}>
                                    Từ chối
                                </Button>
                            </View>
                            <View>
                                <Button style={{
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    borderRadius: 20,
                                    margin: 5, color: 'white', backgroundColor: '#03A9F4',
                                    textAlign: 'center', alignItems: 'center'
                                }}>
                                    Đồng ý
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    touchableOpacity: {
        height: 56, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default ManagerAuthen;