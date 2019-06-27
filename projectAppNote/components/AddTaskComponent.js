import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

import flatListData from '../data/flatListData';

var { height, width } = Dimensions.get('window');

export default class AddTaskComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: '',
            newTaskDescription: ''
        };
    }

    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal style={{
                justifyContent: 'center',
                borderRadius: Platform.OS === 'ios' ? 30 : 0,
                shadowRadius: 10,
                width: width - 80,
                height: height - 200,

            }}
                ref={"myModal"}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert("Modal closed");
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New task information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newTaskName: text })}
                    placeholder="Enter new task's description"
                    value={this.state.newTaskName}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newTaskDescription: text })}
                    placeholder="Enter new task's description"
                    value={this.state.newTaskDescription}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.newTaskName.length == 0 || this.state.newTaskDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newTaskName,
                            image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                            description: this.state.newTaskDescription
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}