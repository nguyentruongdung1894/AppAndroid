import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

import flatListData from '../data/flatListData';

var { height, width } = Dimensions.get('window');

export default class EditTaskComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            taskDescription: ''
        };
    }

    showEditModal = (editingTask, flatlistItem) => {
        console.log(`editingTask = ${JSON.stringify(editingTask)}`);
        this.setState({
            key: editingTask.key,
            taskName: editingTask.name,
            taskDescription: editingTask.description,
            flatlistItem: flatlistItem
        });
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
                }}>Task information</Text>
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
                    onChangeText={(text) => this.setState({ taskName: text })}
                    placeholder="Enter Task's description"
                    value={this.state.taskName}
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
                    onChangeText={(text) => this.setState({ taskDescription: text })}
                    placeholder="Enter Task's description"
                    value={this.state.taskDescription}
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
                        if (this.state.taskName.length == 0 || this.state.taskDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {//not found
                        }
                        flatListData[foundIndex].name = this.state.taskName;
                        flatListData[foundIndex].description = this.state.taskDescription;
                        this.state.flatlistItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}